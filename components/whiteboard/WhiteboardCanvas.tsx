'use client';

import { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import type { PointerEvent, WheelEvent } from 'react';
import { Minus, Plus, RotateCcw, ExternalLink, Layers, CloudRain, Zap, Brain, Users, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

export type WhiteboardItem = {
  id: string;
  title: string;
  description?: string;
  meta?: string;
  tags?: string[];
  probability?: number;
  color: string;
  x: number;
  y: number;
  type: 'sticky' | 'flow' | 'event' | 'note';
  size?: {
    width: number;
    height: number;
  };
  selectTargetId?: string;
  links?: {
    label: string;
    url: string;
  }[];
};

export type WhiteboardGroup = {
  id: string;
  title: string;
  description?: string;
  badges?: string[];
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tone?: 'warm' | 'cool' | 'neutral';
};

export type WhiteboardColumnFrame = {
  id: string;
  title: string;
  description?: string;
  accent: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

interface WhiteboardCanvasProps {
  items: WhiteboardItem[];
  columns?: WhiteboardColumnFrame[];
  groups?: WhiteboardGroup[];
  onSelectItem?: (id: string | null) => void;
  selectedId?: string | null;
  className?: string;
}

const clampZoom = (value: number) => Math.min(2.4, Math.max(0.45, value));

// Mappatura icone per colonne
const COLUMN_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  climate: CloudRain,
  energy: Zap,
  technology: Brain,
  society: Users,
  governance: Globe,
};

const hexToRgba = (hex: string, alpha = 1) => {
  if (!hex || !hex.startsWith('#')) return hex;
  const normalized = hex.length === 4
    ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
    : hex;
  const num = parseInt(normalized.slice(1), 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function WhiteboardCanvas({
  items,
  columns = [],
  groups = [],
  onSelectItem,
  selectedId,
  className,
}: WhiteboardCanvasProps) {
  const { t } = useI18n();
  const boardRef = useRef<HTMLDivElement>(null);
  const pointerState = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.65);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const handleWheel = useCallback((event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY;
    setZoom(prev => clampZoom(prev - delta * 0.0015));
  }, []);

  const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    setIsPanning(true);
    pointerState.current = {
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [offset.x, offset.y]);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setOffset({
      x: event.clientX - pointerState.current.x,
      y: event.clientY - pointerState.current.y,
    });
  }, [isPanning]);

  const stopPan = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    setIsPanning(false);
  }, [isPanning]);

  const handleCanvasClick = () => onSelectItem?.(null);

  const bounds = useMemo(() => {
    if (items.length === 0 && groups.length === 0 && columns.length === 0) {
      return { minX: -1000, minY: -1000, width: 2000, height: 2000, centerX: 0, centerY: 0 };
    }

    const itemMinX = items.length ? Math.min(...items.map(item => item.x)) : Infinity;
    const groupMinX = groups.length ? Math.min(...groups.map(group => group.x)) : Infinity;
    const columnMinX = columns.length ? Math.min(...columns.map(col => col.x)) : Infinity;
    
    const itemMinY = items.length ? Math.min(...items.map(item => item.y)) : Infinity;
    const groupMinY = groups.length ? Math.min(...groups.map(group => group.y)) : Infinity;
    const columnMinY = columns.length ? Math.min(...columns.map(col => col.y)) : Infinity;

    const itemMaxX = items.length ? Math.max(...items.map(item => item.x + (item.size?.width ?? 260))) : -Infinity;
    const groupMaxX = groups.length ? Math.max(...groups.map(group => group.x + group.width)) : -Infinity;
    const columnMaxX = columns.length ? Math.max(...columns.map(col => col.x + col.width)) : -Infinity;
    
    const itemMaxY = items.length ? Math.max(...items.map(item => item.y + (item.size?.height ?? 200))) : -Infinity;
    const groupMaxY = groups.length ? Math.max(...groups.map(group => group.y + group.height)) : -Infinity;
    const columnMaxY = columns.length ? Math.max(...columns.map(col => col.y + col.height)) : -Infinity;

    const minX = Math.min(itemMinX, groupMinX, columnMinX, -600) - 200;
    const minY = Math.min(itemMinY, groupMinY, columnMinY, -600) - 200;
    const maxX = Math.max(itemMaxX, groupMaxX, columnMaxX, 600) + 200;
    const maxY = Math.max(itemMaxY, groupMaxY, columnMaxY, 600) + 200;

    const width = maxX - minX;
    const height = maxY - minY;
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    return {
      minX,
      minY,
      width,
      height,
      centerX,
      centerY,
    };
  }, [items, groups, columns]);

  const handleReset = useCallback(() => {
    if (!boardRef.current) return;

    const container = boardRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    if (containerWidth === 0 || containerHeight === 0) return;

    const padding = 120;
    const zoomX = (containerWidth - padding * 2) / bounds.width;
    const zoomY = (containerHeight - padding * 2) / bounds.height;
    const calculatedZoom = Math.min(zoomX, zoomY, 0.75);
    const finalZoom = clampZoom(Math.max(calculatedZoom, 0.35));

    const offsetX = -bounds.centerX * finalZoom;
    const offsetY = -bounds.centerY * finalZoom;

    setZoom(finalZoom);
    setOffset({ x: offsetX, y: offsetY });
  }, [bounds]);

  // Calculate initial zoom and offset to fit content
  useEffect(() => {
    if (!boardRef.current) return;

    const container = boardRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    if (containerWidth === 0 || containerHeight === 0) return;

    // Calculate zoom to fit content with padding
    const padding = 120;
    const zoomX = (containerWidth - padding * 2) / bounds.width;
    const zoomY = (containerHeight - padding * 2) / bounds.height;
    const calculatedZoom = Math.min(zoomX, zoomY, 0.75); // Max zoom 75%
    const finalZoom = clampZoom(Math.max(calculatedZoom, 0.35)); // Min zoom 35%

    // Center the content
    const offsetX = -bounds.centerX * finalZoom;
    const offsetY = -bounds.centerY * finalZoom;

    setZoom(finalZoom);
    setOffset({ x: offsetX, y: offsetY });
    
    // Reset initialized flag to allow recalculation when bounds change significantly
    if (!initialized) {
      setInitialized(true);
    }
  }, [bounds.width, bounds.height, bounds.centerX, bounds.centerY, initialized]); // Recalculate when content size/position changes

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden bg-slate-50',
        className
      )}
    >
      <div
        ref={boardRef}
        className={cn(
          'absolute inset-0 cursor-grab active:cursor-grabbing',
          isPanning && 'cursor-grabbing'
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(148, 163, 184, 0.15) 1.5px, transparent 0)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: 'center',
        }}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopPan}
        onPointerLeave={stopPan}
        onClick={handleCanvasClick}
      >
        <div
          className="absolute top-1/2 left-1/2 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom}) translate(-50%, -50%)`,
            transformOrigin: '0 0',
          }}
        >
          {/* Groups as "Areas" */}
          {groups.map(group => {
            return (
              <div
                key={group.id}
                style={{
                  transform: `translate(${group.x}px, ${group.y}px)`,
                  width: group.width,
                  height: group.height,
                  borderColor: hexToRgba(group.color, 0.7),
                }}
                className="absolute rounded-xl border-[3px] border-solid bg-transparent"
              >
                <div className="absolute top-2 left-4 px-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    {group.title}
                  </h3>
                </div>
              </div>
            );
          })}

           {/* Columns as "Swimlanes" or Background Areas */}
           {columns.map(column => (
            <div
              key={column.id}
              style={{
                transform: `translate(${column.x}px, ${column.y}px)`,
                width: column.width,
                height: column.height,
                borderColor: hexToRgba(column.accent, 0.1),
              }}
              className="absolute rounded-3xl border-l-4 border-t border-r border-b bg-white/40"
            >
               <div className="absolute -top-20 left-4 right-4">
                  <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-800 leading-tight">
                    {(() => {
                      // Rimuove il prefisso "lane-" dall'id se presente
                      const columnKey = column.id.replace(/^lane-/, '');
                      const IconComponent = COLUMN_ICONS[columnKey] || Brain;
                      return <IconComponent className="w-8 h-8" />;
                    })()}
                    {column.title}
                  </h2>
               </div>
            </div>
          ))}

          {/* Items */}
          {items.map(item => {
            const isSelectable = item.type !== 'note';
            
            // Styles for different types
            const isSticky = item.type === 'sticky';
            const isEvent = item.type === 'event';
            const isFlow = item.type === 'flow';
            const isNote = item.type === 'note';
            const selectionId = item.selectTargetId ?? item.id;
            const isSelected = selectedId === selectionId;

            return (
              <div
                key={item.id}
                className="relative"
                style={{
                  transform: `translate(${item.x}px, ${item.y}px)`,
                  zIndex: isSticky ? 5 : 0,
                }}
              >
                <button
                  onClick={event => {
                    event.stopPropagation();
                    if (!isSelectable) return;
                    if (isSticky && item.selectTargetId) {
                      onSelectItem?.(isSelected ? null : selectionId);
                    } else if (!isSticky) {
                      onSelectItem?.(isSelected ? null : selectionId);
                    }
                  }}
                  onPointerDown={event => event.stopPropagation()}
                  style={{
                    width: item.size?.width ?? (isSticky ? 85 : 260),
                    height: item.size?.height ?? (isSticky ? 65 : 180),
                    backgroundColor: isSticky ? '#fef3c7' : isEvent ? '#1e293b' : '#ffffff',
                    color: isEvent ? '#ffffff' : '#0f172a',
                  }}
                  className={cn(
                    'absolute inset-0 text-left overflow-hidden flex flex-col transition-all duration-200 group',
                    // Shape
                    isSticky ? 'rounded-lg shadow-md border-2 border-amber-300/60 p-2.5' : 'rounded-xl shadow-sm p-4',
                    isFlow && 'border border-slate-200',
                    isNote && 'bg-transparent border-none shadow-none',
                    
                    // Selection
                    !isSticky && isSelected
                      ? 'ring-2 ring-blue-500 shadow-xl scale-[1.02] z-10'
                      : !isSticky && 'hover:shadow-md hover:-translate-y-1 z-0',

                    // Specific Overrides
                  )}
                  type="button"
                >
                {!isNote && !isSticky && item.meta && (
                  <div className="absolute top-2 right-2 flex-shrink-0">
                    <span className={cn(
                      "text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full",
                      isEvent 
                        ? "bg-slate-700/80 text-slate-200" 
                        : "bg-slate-100 text-slate-600"
                    )}>
                      {item.meta}
                    </span>
                  </div>
                )}
                
                {isSticky && item.links && item.links.length > 0 && item.links[0]?.url && (
                  <a
                    href={item.links[0].url.startsWith('http') ? item.links[0].url : `https://${item.links[0].url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      const url = item.links?.[0]?.url;
                      if (!url) {
                        e.preventDefault();
                        return;
                      }
                      // Normalize URL if needed
                      if (!url.startsWith('http')) {
                        e.preventDefault();
                        window.open(`https://${url}`, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="absolute top-2 right-2 text-amber-900/60 z-30 hover:text-amber-900 transition-colors cursor-pointer"
                    aria-label={item.links[0].label || t('whiteboard.openLink')}
                    title={item.links[0].label || t('whiteboard.openLink')}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <div className="flex items-center justify-start h-full">
                  <h3 className={cn(
                    "font-bold leading-tight text-left",
                    isSticky ? "font-handwriting text-[9px] line-clamp-2" : "text-lg line-clamp-3",
                    isNote && "text-xl text-slate-400 font-medium italic"
                  )}>
                    {item.title}
                  </h3>
                </div>

                {item.probability !== undefined && !isSticky && (
                  <div className="absolute bottom-2 right-2 flex h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                )}

                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white/90 border border-gray-200 shadow-lg backdrop-blur">
        <button
          onClick={() => setZoom(prev => clampZoom(prev - 0.15))}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={t('whiteboard.zoomOut')}
        >
          <Minus className="w-4 h-4" />
        </button>
        <div className="px-3 text-sm font-semibold tabular-nums text-slate-700">
          {(zoom * 100).toFixed(0)}%
        </div>
        <button
          onClick={() => setZoom(prev => clampZoom(prev + 0.15))}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={t('whiteboard.zoomIn')}
        >
          <Plus className="w-4 h-4" />
        </button>
        <div className="h-6 w-px bg-gray-200" />
        <button
          onClick={handleReset}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1 text-xs font-semibold"
          aria-label={t('whiteboard.resetZoom')}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}


