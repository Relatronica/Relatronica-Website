'use client';

import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { format } from 'date-fns';
import { it, enUS } from 'date-fns/locale';
import { X, TrendingUp, TrendingDown, BarChart, Tags, Percent } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Theme, Probability } from '@/types/deadline';
import { deadlines } from '@/data/deadlines';
import { cn, getThemeColorHex } from '@/lib/utils';
import { Deadline, FilterState } from '@/types/deadline';
import { filterDeadlines } from '@/lib/filters';
import { applyScenarioToDeadlines, type ScenarioType, type EnhancedDeadline } from '@/lib/scenarios';
import { THEME_LABELS, BOARD_COLUMNS, BOARD_MODES, BOARD_LAYOUT, type WhiteboardMode } from '@/lib/constants';
import {
  WhiteboardCanvas,
  type WhiteboardItem,
  type WhiteboardGroup,
  type WhiteboardColumnFrame,
} from './whiteboard/WhiteboardCanvas';
import { WhiteboardInspector } from './whiteboard/WhiteboardInspector';
import { TimelineFilter } from './TimelineFilter';

const BOARD_TOP_OFFSET = 0;

export function VisionaryView({
  filters,
  onFilterChange,
}: {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}) {
  const { t, locale } = useI18n();
  const [selectedDeadline, setSelectedDeadline] = useState<string | null>(null);
  const [scenarioType, setScenarioType] = useState<ScenarioType>('realistic');
  const [boardMode, setBoardMode] = useState<WhiteboardMode>('strategia');
  const [openFilterMenu, setOpenFilterMenu] = useState<'themes' | 'probabilities' | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  const dateLocale = locale === 'en' ? enUS : it;

  // Aggiorna i filtri quando viene selezionato un anno
  const effectiveFilters = useMemo(() => {
    if (selectedYear !== null) {
      return {
        ...filters,
        dateRange: {
          start: new Date(selectedYear, 0, 1),
          end: new Date(selectedYear, 11, 31, 23, 59, 59),
        },
      };
    }
    // Se nessun anno è selezionato, rimuovi dateRange dai filtri
    const { dateRange, ...filtersWithoutDateRange } = filters;
    return filtersWithoutDateRange;
  }, [filters, selectedYear]);

  const filteredDeadlines = useMemo(() => {
    return filterDeadlines(deadlines, effectiveFilters);
  }, [effectiveFilters]);

  const adjustedDeadlines = useMemo<EnhancedDeadline[]>(() => {
    return applyScenarioToDeadlines(filteredDeadlines, scenarioType)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [filteredDeadlines, scenarioType]);

  const stats = useMemo(() => {
    const total = adjustedDeadlines.length;
    const avgProb =
      adjustedDeadlines.reduce((sum, deadline) => sum + deadline.adjustedProbability, 0) /
        (total || 1);
    const critical = adjustedDeadlines.filter(deadline => deadline.adjustedProbability >= 80).length;
    const upcoming = adjustedDeadlines.filter(deadline => deadline.date > new Date()).length;

    return {
      total,
      averageProbability: Math.round(avgProb),
      critical,
      upcoming,
    };
  }, [adjustedDeadlines]);

  const orderedDeadlines = useMemo(() => {
    if (boardMode === 'timeline') {
      return [...adjustedDeadlines].sort((a, b) => a.date.getTime() - b.date.getTime());
    }
    if (boardMode === 'cluster') {
      return [...adjustedDeadlines].sort((a, b) =>
        (a.themes[0] ?? '').localeCompare(b.themes[0] ?? '')
      );
    }

    return [...adjustedDeadlines].sort((a, b) => b.adjustedProbability - a.adjustedProbability);
  }, [adjustedDeadlines, boardMode]);

const themeBuckets = useMemo(() => {
  const buckets = new Map<string, EnhancedDeadline[]>();
  orderedDeadlines.forEach(deadline => {
    const key = deadline.themes[0] ?? 'altro';
    if (!buckets.has(key)) {
      buckets.set(key, []);
    }
    buckets.get(key)!.push(deadline);
  });
  return buckets;
}, [orderedDeadlines]);

const orderedThemes = useMemo(() => {
  return Array.from(themeBuckets.entries()).sort((a, b) => b[1].length - a[1].length);
}, [themeBuckets]);

  const boardContent = useMemo(() => {
    const columnWidth = 520; // Wider columns for 2 items per row
    const columnGap = 50; // Better spacing between columns
    const columnStartX = -((BOARD_COLUMNS.length - 1) * (columnWidth + columnGap)) / 2;
    const columnTop = -400;

    const columns: WhiteboardColumnFrame[] = BOARD_COLUMNS.map((column, index) => ({
      id: `lane-${column.id}`,
      title: t(`nexthuman.columns.${column.id}.title`) || column.title,
      description: t(`nexthuman.columns.${column.id}.description`) || column.description,
      accent: column.accent,
      x: columnStartX + index * (columnWidth + columnGap),
      y: columnTop,
      width: columnWidth,
      height: 200, // Altezza iniziale, verrà aggiornata dinamicamente
    }));

    const columnAssignments = new Map<string, number>();
    BOARD_COLUMNS.forEach((column, index) => {
      column.themes.forEach(theme => columnAssignments.set(theme, index));
    });
    
    // Track Y offset for each column independently to stack items
    // Minimal padding to start groups close to column top
    const columnOffsets = columns.map(() => 40);
    const columnGroups: WhiteboardGroup[][] = columns.map(() => []);

    const groups: WhiteboardGroup[] = [];
    const items: WhiteboardItem[] = [];

    orderedThemes.forEach(([theme, deadlinesForTheme]) => {
      if (deadlinesForTheme.length === 0) return;

      const columnIndex = columnAssignments.get(theme) ?? columns.length - 1;
      const columnFrame = columns[columnIndex];

      // Sort deadlines by date for logical flow
      const localItems = deadlinesForTheme
        .slice(0, 8) // keep layout manageable
        .sort((a, b) => a.date.getTime() - b.date.getTime());

      const groupX = columnFrame.x + 20;
      const groupY = columnFrame.y + columnOffsets[columnIndex];
      const groupWidth = columnFrame.width - 40;

      // Layout constants
      const groupPadding = 24;
      const headerHeight = 42;
      const headerGap = 12;
      const cardHeight = 180;
      const cardGap = 28;
      const itemsPerRow = 2;

      const availableWidth = groupWidth - groupPadding * 2 - (itemsPerRow - 1) * cardGap;
      const cardWidth = Math.max(200, availableWidth / itemsPerRow);

      const accent = getThemeColorHex(theme);
      const criticalCount = deadlinesForTheme.filter(deadline => deadline.adjustedProbability >= 75).length;

      const headerBottom = groupY + groupPadding + headerHeight;
      const baseItemY = headerBottom + headerGap;

      let maxItemBottom = headerBottom;

      localItems.forEach((deadline, index) => {
        const row = Math.floor(index / itemsPerRow);
        const col = index % itemsPerRow;

        const itemY = baseItemY + row * (cardHeight + cardGap);
        const itemX = groupX + groupPadding + col * (cardWidth + cardGap);
        const itemBottom = itemY + cardHeight;
        maxItemBottom = Math.max(maxItemBottom, itemBottom);

        const primaryTheme = deadline.themes[0] ?? theme;

        const deadlineLinks = (deadline.actions?.flatMap(action => action.links ?? []) ?? [])
          .filter((link): link is { label: string; url: string } => 
            Boolean(link && link.url && link.url.trim() && (link.url.startsWith('http') || link.url.includes('.')))
          );
        
        // Traduci titolo e descrizione del deadline
        const deadlineTitleKey = `deadlines.${deadline.id}.title`;
        const deadlineDescriptionKey = `deadlines.${deadline.id}.description`;
        const translatedTitle = t(deadlineTitleKey);
        const translatedDescription = t(deadlineDescriptionKey);
        const displayTitle = translatedTitle !== deadlineTitleKey ? translatedTitle : deadline.title;
        const displayDescription = translatedDescription !== deadlineDescriptionKey ? translatedDescription : deadline.description;
        
        items.push({
          id: deadline.id,
          title: displayTitle,
          description: displayDescription,
          meta: format(deadline.date, 'MMM yyyy', { locale: dateLocale }),
          tags: deadline.themes.slice(0, 2),
          probability: deadline.adjustedProbability,
          color: getThemeColorHex(primaryTheme),
          x: itemX,
          y: itemY,
          type: deadline.adjustedProbability >= 80 ? 'event' : 'flow',
          size: { width: cardWidth, height: cardHeight },
          links: deadlineLinks.slice(0, 1),
        });

        // Create sticky note for deadlines with valid links
        if (deadlineLinks.length > 0 && deadlineLinks[0]?.url) {
          // Position sticky note overlapping the bottom-right corner of the card, like attached
          const stickyX = itemX + cardWidth - 75;
          const stickyY = itemY + cardHeight - 50;
          
          // Traduci la label del link se disponibile
          const linkLabel = deadlineLinks[0]?.label ?? 'Link';
          const linkLabelKey = `deadlines.${deadline.id}.links.${linkLabel}`;
          const translatedLinkLabel = t(linkLabelKey);
          const displayLinkLabel = translatedLinkLabel !== linkLabelKey ? translatedLinkLabel : linkLabel;
          
          items.push({
            id: `sticky-${deadline.id}`,
            title: displayLinkLabel,
            description: deadlineLinks.length > 1 ? `+${deadlineLinks.length - 1} ${t('nexthuman.view.moreLinks')}` : undefined,
            meta: '',
            color: '#fef3c7',
            x: stickyX,
            y: stickyY,
            type: 'sticky',
            size: { width: 85, height: 65 },
            selectTargetId: deadline.id,
            links: deadlineLinks,
          });
        }
      });

      const contentBottom = localItems.length > 0 ? maxItemBottom : headerBottom + headerGap;
      const groupHeight = contentBottom - groupY + groupPadding;

      const group: WhiteboardGroup = {
        id: `group-${theme}`,
        title: t(`nexthuman.themes.${theme}`) || (THEME_LABELS[theme] ?? theme),
        description: `${deadlinesForTheme.length} ${t('nexthuman.view.groups.events')}`,
        badges: criticalCount > 0 ? [`${criticalCount} ${t('nexthuman.view.groups.critical')}`] : [],
        color: accent,
        x: groupX,
        y: groupY,
        width: groupWidth,
        height: groupHeight,
      };

      groups.push(group);
      columnGroups[columnIndex].push(group);

      columnOffsets[columnIndex] += groupHeight + 60;
    });

    // Calcola l'altezza effettiva di ogni colonna basata sul contenuto
    const columnHeights = columns.map((column, columnIndex) => {
      const groupsInColumn = columnGroups[columnIndex];
      if (groupsInColumn.length === 0) {
        return 200; // Altezza minima per colonne vuote
      }
      const lastGroup = groupsInColumn[groupsInColumn.length - 1];
      const columnBottom = lastGroup.y + lastGroup.height;
      const columnContentHeight = columnBottom - column.y + 40; // Aggiungi padding inferiore
      return Math.max(200, columnContentHeight);
    });

    // Aggiorna le altezze delle colonne
    columns.forEach((column, index) => {
      column.height = columnHeights[index];
    });

    return {
      columns,
      items,
      groups,
    };
  }, [boardMode, orderedDeadlines, orderedThemes, scenarioType]);

  const whiteboardColumns = boardContent.columns;
  const whiteboardItems = boardContent.items;
  const whiteboardGroups = boardContent.groups;

  const selectedEvent = useMemo(() => {
    if (!selectedDeadline) return null;
    return adjustedDeadlines.find(deadline => deadline.id === selectedDeadline) ?? null;
  }, [selectedDeadline, adjustedDeadlines]);

  const boardViewportStyle: CSSProperties = {
    position: 'fixed',
    top: BOARD_TOP_OFFSET,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
  };

  const layoutSpacerStyle: CSSProperties = {
    height: '100vh',
  };

  if (adjustedDeadlines.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-lg font-medium text-slate-500">{t('nexthuman.view.noDeadlines')}</p>
          <button onClick={() => onFilterChange({ ...filters, themes: [] })} className="mt-4 text-blue-600 hover:underline">
            {t('nexthuman.view.resetFilters')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={layoutSpacerStyle}>
      <div className="fixed inset-x-0" style={boardViewportStyle}>
        <WhiteboardCanvas
          columns={whiteboardColumns}
          items={whiteboardItems}
          groups={whiteboardGroups}
          selectedId={selectedDeadline}
          onSelectItem={setSelectedDeadline}
          className="h-full"
        />

        {/* Main Toolbar - Bottom Center */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center gap-3">
          
           {/* Filter Bar */}
           <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur">
              
              {/* Scenarios */}
              <div className="flex items-center gap-1">
                {(['optimistic', 'realistic', 'pessimistic'] as ScenarioType[]).map(type => {
                  const Icon = type === 'optimistic' ? TrendingUp : type === 'realistic' ? BarChart : TrendingDown;
                  return (
              <button
                key={type}
                onClick={() => setScenarioType(type)}
                className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  scenarioType === type
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {t(`nexthuman.view.scenarios.${type}`)}
                    </button>
                  );
                })}
              </div>

              <div className="h-6 w-px bg-slate-200" />

              {/* Themes Button */}
              <div className="relative" data-filter-menu>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenFilterMenu(openFilterMenu === 'themes' ? null : 'themes');
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all",
                    filters.themes.length > 0
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Tags className="w-3.5 h-3.5" />
                  {t('nexthuman.view.filters.themes')}
                  {filters.themes.length > 0 && (
                    <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold">
                      {filters.themes.length}
                    </span>
                  )}
                </button>

                {/* Themes Popover */}
                {openFilterMenu === 'themes' && (
                  <div className="absolute bottom-full left-0 mb-2 rounded-xl border border-slate-200 bg-white p-3 shadow-2xl min-w-[280px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-700">{t('nexthuman.view.filters.selectThemes')}</span>
                      {filters.themes.length > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onFilterChange({ ...filters, themes: [] });
                          }}
                          className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          {t('nexthuman.view.filters.clear')}
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(['clima', 'tecnologia', 'demografia', 'geopolitica', 'economia', 'società', 'scienza', 'ambiente', 'energia', 'salute'] as Theme[]).map(theme => {
                        const isActive = filters.themes.includes(theme);
                        return (
                          <button
                            key={theme}
                            onClick={(e) => {
                              e.stopPropagation();
                              const newThemes = isActive
                                ? filters.themes.filter(t => t !== theme)
                                : [...filters.themes, theme];
                              onFilterChange({ ...filters, themes: newThemes });
                            }}
                            className={cn(
                              "px-2.5 py-1 rounded-lg text-xs font-medium transition-all",
                              isActive
                                ? "text-white shadow-sm"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            )}
                            style={isActive ? { backgroundColor: getThemeColorHex(theme) } : {}}
                          >
                            {t(`nexthuman.themes.${theme}`) || (THEME_LABELS[theme] ?? theme)}
              </button>
                        );
                      })}
          </div>
        </div>
                )}
      </div>

              {/* Probabilities Button */}
              <div className="relative" data-filter-menu>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenFilterMenu(openFilterMenu === 'probabilities' ? null : 'probabilities');
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all",
                    filters.probabilities.length > 0
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <Percent className="w-3.5 h-3.5" />
                  {t('nexthuman.view.filters.probabilities')}
                  {filters.probabilities.length > 0 && (
                    <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold">
                      {filters.probabilities.length}
                    </span>
                  )}
                </button>

                {/* Probabilities Popover */}
                {openFilterMenu === 'probabilities' && (
                  <div className="absolute bottom-full left-0 mb-2 rounded-xl border border-slate-200 bg-white p-3 shadow-2xl min-w-[200px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-700">{t('nexthuman.view.filters.selectProbabilities')}</span>
                      {filters.probabilities.length > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onFilterChange({ ...filters, probabilities: [] });
                          }}
                          className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          {t('nexthuman.view.filters.clear')}
                        </button>
                      )}
            </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(['low', 'medium', 'high', 'very-high'] as Probability[]).map(prob => {
                        const isActive = filters.probabilities.includes(prob);
                        const probKey = prob === 'very-high' ? 'veryHigh' : prob;
                        return (
                          <button
                            key={prob}
                            onClick={(e) => {
                              e.stopPropagation();
                              const newProbs = isActive
                                ? filters.probabilities.filter(p => p !== prob)
                                : [...filters.probabilities, prob];
                              onFilterChange({ ...filters, probabilities: newProbs });
                            }}
                            className={cn(
                              "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                              isActive
                                ? "bg-slate-900 text-white shadow-sm"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            )}
                          >
                            {t(`nexthuman.view.filters.labels.${probKey}`)}
                          </button>
                        );
                      })}
            </div>
            </div>
                )}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <WhiteboardInspector
          deadline={selectedEvent}
          onClose={() => setSelectedDeadline(null)}
          className="top-6 right-6 bottom-6"
        />
      )}

      {/* Timeline Filter - Left Side */}
      <TimelineFilter
        deadlines={deadlines}
        selectedYear={selectedYear}
        onYearSelect={setSelectedYear}
      />
      </div>
    </div>
  );
}
