'use client';

import { useMemo, useState } from 'react';
import { Deadline } from '@/types/deadline';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';
import { getHorizonStart } from '@/lib/deadlineHorizon';

interface TimelineFilterProps {
  deadlines: Deadline[];
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
}

/**
 * Vertical year scrubber.
 * Uses deadline anchor years only (horizon start), not every year inside
 * a window — otherwise long ranges like 2030–2050 make the rail unreadable.
 */
export function TimelineFilter({ deadlines, selectedYear, onYearSelect }: TimelineFilterProps) {
  const { t } = useI18n();
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const availableYears = useMemo(() => {
    const years = new Set<number>();
    deadlines.forEach(deadline => {
      years.add(getHorizonStart(deadline).getFullYear());
    });
    return Array.from(years).sort((a, b) => a - b);
  }, [deadlines]);

  const currentYear = new Date().getFullYear();
  const minYear = availableYears.length
    ? Math.min(...availableYears, currentYear)
    : currentYear;
  const maxYear = availableYears.length
    ? Math.max(...availableYears)
    : currentYear + 10;

  // Scrub points: anchors + current year if missing (for orientation)
  const scrubYears = useMemo(() => {
    const years = new Set(availableYears);
    if (currentYear >= minYear && currentYear <= maxYear) {
      years.add(currentYear);
    }
    return Array.from(years).sort((a, b) => a - b);
  }, [availableYears, currentYear, minYear, maxYear]);

  const yearSpan = Math.max(1, maxYear - minYear);
  const timelineHeight = Math.max(360, Math.min(560, scrubYears.length * 36));
  const lineExtension = 22;

  const positionForYear = (year: number) => {
    if (scrubYears.length <= 1) return 0;
    return ((year - minYear) / yearSpan) * 100;
  };

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
        <div
          className="relative"
          style={{ height: `${timelineHeight + lineExtension * 2}px` }}
        >
          <div
            className={cn(
              'absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300',
              isHovering ? 'bg-slate-900/60 dark:bg-slate-100/60' : 'bg-slate-900/20 dark:bg-slate-100/20'
            )}
          />

          <div
            className="relative h-full"
            style={{ paddingTop: `${lineExtension + 12}px`, paddingBottom: `${lineExtension}px` }}
          >
            {scrubYears.map(year => {
              const hasDeadlines = availableYears.includes(year);
              const isSelected = selectedYear === year;
              const isCurrentYear = year === currentYear;
              const isHovered = hoveredYear === year;
              const isEndpoint = year === scrubYears[0] || year === scrubYears[scrubYears.length - 1];
              const showLabel =
                isHovered ||
                isSelected ||
                isEndpoint ||
                (isCurrentYear && (isHovering || !selectedYear));
              const topPercent = positionForYear(year);

              return (
                <div
                  key={year}
                  className="absolute left-0"
                  style={{ top: `${topPercent}%`, transform: 'translateY(-50%)' }}
                  onMouseEnter={() => hasDeadlines && setHoveredYear(year)}
                >
                  <button
                    onClick={() => {
                      if (hasDeadlines) {
                        onYearSelect(isSelected ? null : year);
                      }
                    }}
                    disabled={!hasDeadlines}
                    className={cn(
                      'relative transition-all duration-200 group',
                      hasDeadlines ? 'cursor-pointer' : 'cursor-default'
                    )}
                    aria-label={String(year)}
                  >
                    <div
                      className={cn(
                        'absolute left-1/2 -translate-x-1/2 rounded-full transition-all duration-200',
                        isSelected
                          ? 'w-2.5 h-2.5 bg-slate-900 dark:bg-white scale-150 ring-4 ring-slate-900/20 dark:ring-white/20 z-20'
                          : isHovered && hasDeadlines
                            ? 'w-2.5 h-2.5 bg-slate-700 dark:bg-slate-300 scale-125 ring-2 ring-slate-700/30 dark:ring-slate-300/30 z-10'
                            : hasDeadlines
                              ? 'w-2 h-2 bg-slate-500 dark:bg-slate-400 hover:bg-slate-700 dark:hover:bg-slate-300'
                              : 'w-1.5 h-1.5 bg-blue-500/70 dark:bg-blue-400/70'
                      )}
                    />

                    {showLabel && (
                      <div
                        className={cn(
                          'absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-200',
                          isSelected || isHovered || isEndpoint || isCurrentYear
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-2 pointer-events-none'
                        )}
                      >
                        <div
                          className={cn(
                            'px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-md backdrop-blur-md transition-all border tabular-nums',
                            isSelected
                              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white'
                              : isCurrentYear
                                ? 'bg-blue-500/90 text-white border-blue-600/50'
                                : 'bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white border-slate-200/80 dark:border-slate-600/80'
                          )}
                        >
                          {year}
                          {isCurrentYear && !isSelected && (
                            <span className="ml-1 text-[9px] opacity-75">•</span>
                          )}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* "All" dot at top */}
          <div
            className="absolute left-0"
            style={{ top: `${-lineExtension}px`, transform: 'translateY(-50%)' }}
            onMouseEnter={() => setHoveredYear(null)}
          >
            <button
              onClick={() => onYearSelect(null)}
              className="relative transition-all duration-200 group cursor-pointer"
            >
              <div
                className={cn(
                  'absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full transition-all duration-200',
                  selectedYear === null
                    ? 'bg-slate-900 dark:bg-white scale-125 ring-4 ring-slate-900/20 dark:ring-white/20 z-20'
                    : isHovering
                      ? 'bg-slate-700 dark:bg-slate-300 scale-110 ring-2 ring-slate-700/30 dark:ring-slate-300/30 z-10'
                      : 'bg-slate-500 dark:bg-slate-400 hover:bg-slate-700 dark:hover:bg-slate-300'
                )}
              />

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
                      'px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-md backdrop-blur-md transition-all border',
                      selectedYear === null
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white'
                        : 'bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white border-slate-200/80 dark:border-slate-600/80'
                    )}
                  >
                    {t('nexthuman.view.timeline.all')}
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* Bottom decorative dot */}
          <div
            className="absolute left-0"
            style={{ bottom: 0, transform: 'translateY(100%)' }}
          >
            <div
              className={cn(
                'absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-200',
                'bg-slate-400 dark:bg-slate-500 opacity-60'
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
