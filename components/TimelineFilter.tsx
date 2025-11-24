'use client';

import { useMemo, useState } from 'react';
import { Deadline } from '@/types/deadline';
import { cn } from '@/lib/utils';

interface TimelineFilterProps {
  deadlines: Deadline[];
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
}

export function TimelineFilter({ deadlines, selectedYear, onYearSelect }: TimelineFilterProps) {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Calcola gli anni disponibili dai deadline
  const availableYears = useMemo(() => {
    const years = new Set<number>();
    deadlines.forEach(deadline => {
      years.add(deadline.date.getFullYear());
    });
    return Array.from(years).sort((a, b) => a - b);
  }, [deadlines]);

  const currentYear = new Date().getFullYear();
  const minYear = Math.min(...availableYears, currentYear);
  const maxYear = Math.max(...availableYears);

  // Crea un range completo di anni dal min al max
  const allYears = useMemo(() => {
    const years: number[] = [];
    for (let year = minYear; year <= maxYear; year++) {
      years.push(year);
    }
    return years;
  }, [minYear, maxYear]);

  // Calcola altezza della timeline basata sul numero di anni
  const timelineHeight = Math.max(400, Math.min(800, allYears.length * 24));
  // Aumenta la lunghezza della linea per toccare i pallini estremi
  const lineExtension = 22; // Spazio extra per toccare i pallini estremi e evitare sovrapposizioni

  return (
    <div 
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 pointer-events-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setHoveredYear(null);
      }}
    >
      <div className="relative pointer-events-auto">
        {/* Container principale per la timeline */}
        <div 
          className="relative"
          style={{ height: `${timelineHeight + lineExtension * 2}px` }}
        >
          {/* Linea verticale principale - sempre visibile, va da top a bottom */}
          <div 
            className={cn(
              "absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300",
              isHovering ? "bg-slate-900/60" : "bg-slate-900/20"
            )}
          />

          {/* Container per gli anni con padding per evitare sovrapposizione con i pallini estremi */}
          <div 
            className="relative flex flex-col justify-between h-full"
            style={{ paddingTop: `${lineExtension + 12}px`, paddingBottom: `${lineExtension}px` }}
          >
          {allYears.map((year, index) => {
            const hasDeadlines = availableYears.includes(year);
            const isSelected = selectedYear === year;
            const isCurrentYear = year === currentYear;
            const isHovered = hoveredYear === year;
            
            // Mostra label solo se hover, selezionato, o se è l'anno corrente quando espanso
            const showLabel = isHovered || isSelected || (isCurrentYear && isHovering);

            // Posizione verticale basata sull'indice
            const topPercent = (index / (allYears.length - 1 || 1)) * 100;

            return (
              <div
                key={year}
                className="absolute left-0"
                style={{
                  top: `${topPercent}%`,
                  transform: 'translateY(-50%)',
                }}
                onMouseEnter={() => hasDeadlines && setHoveredYear(year)}
              >
                {/* Punto interattivo */}
                <button
                  onClick={() => {
                    if (hasDeadlines) {
                      onYearSelect(isSelected ? null : year);
                    }
                  }}
                  disabled={!hasDeadlines}
                  className={cn(
                    'relative transition-all duration-200 group',
                    hasDeadlines ? 'cursor-pointer' : 'cursor-not-allowed'
                  )}
                >
                  {/* Punto sulla timeline */}
                  <div
                    className={cn(
                      'absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-200',
                      isSelected
                        ? 'bg-slate-900 scale-150 ring-4 ring-slate-900/20 z-20'
                        : isHovered && hasDeadlines
                        ? 'bg-slate-700 scale-125 ring-2 ring-slate-700/30 z-10'
                        : hasDeadlines
                        ? 'bg-slate-500 hover:bg-slate-700'
                        : 'bg-slate-300 opacity-40'
                    )}
                  />

                  {/* Label anno - appare al hover/select */}
                  {showLabel && hasDeadlines && (
                    <div
                      className={cn(
                        'absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-200',
                        isSelected || isHovered
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-2 pointer-events-none'
                      )}
                    >
                      <div
                        className={cn(
                          'px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg backdrop-blur-md transition-all border',
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900'
                            : isCurrentYear
                            ? 'bg-blue-500/90 text-white border-blue-600/50'
                            : 'bg-white/95 text-slate-900 border-slate-200/80'
                        )}
                      >
                        {year}
                        {isCurrentYear && !isSelected && (
                          <span className="ml-1.5 text-[10px] opacity-75">•</span>
                        )}
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
          </div>

          {/* Pallino "Tutti" all'estremità alta - perfettamente allineato */}
          <div
            className="absolute left-0"
            style={{
              top: `${-lineExtension}px`,
              transform: 'translateY(-50%)',
            }}
            onMouseEnter={() => setHoveredYear(null)}
          >
          <button
            onClick={() => onYearSelect(null)}
            className="relative transition-all duration-200 group cursor-pointer"
          >
            {/* Pallino grande per "Tutti" */}
            <div
              className={cn(
                'absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-200',
                selectedYear === null
                  ? 'bg-slate-900 scale-125 ring-4 ring-slate-900/20 z-20'
                  : isHovering
                  ? 'bg-slate-700 scale-110 ring-2 ring-slate-700/30 z-10'
                  : 'bg-slate-500 hover:bg-slate-700'
              )}
            />

            {/* Label "Tutti" - appare su hover/select */}
            {(selectedYear === null || isHovering) && (
              <div
                className={cn(
                  'absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-200',
                  selectedYear === null || isHovering
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2 pointer-events-none'
                )}
              >
                <div
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg backdrop-blur-md transition-all border',
                    selectedYear === null
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white/95 text-slate-900 border-slate-200/80'
                  )}
                >
                  Tutti
                </div>
              </div>
            )}
          </button>
        </div>

        {/* Pallino decorativo all'estremità bassa - perfettamente allineato */}
        <div
          className="absolute left-0"
          style={{
            bottom: 0,
            transform: 'translateY(100%)',
          }}
        >
          <div
            className={cn(
              'absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-200',
              'bg-slate-400 opacity-60'
            )}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
