'use client';

import { useMemo, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { cn, getThemeColorHex } from '@/lib/utils';
import type { Deadline } from '@/types/deadline';

interface GanttChartProps {
  deadlines: Array<Deadline & { adjustedProbability: number }>;
  selectedDeadline: string | null;
  onSelectDeadline: (id: string | null) => void;
}

export function GanttChart({ deadlines, selectedDeadline, onSelectDeadline }: GanttChartProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const todayRef = useRef<HTMLDivElement>(null);

  // Calculate time range
  const timeRange = useMemo(() => {
    if (deadlines.length === 0) {
      const currentYear = new Date().getFullYear();
      return {
        startYear: currentYear,
        endYear: currentYear + 10,
        startDate: new Date(currentYear, 0, 1),
        endDate: new Date(currentYear + 10, 11, 31),
      };
    }

    const dates = deadlines.map(d => new Date(d.date));
    const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
    const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));
    
    const startYear = minDate.getFullYear();
    const endYear = maxDate.getFullYear() + 1;
    
    return {
      startYear,
      endYear,
      startDate: new Date(startYear, 0, 1),
      endDate: new Date(endYear, 11, 31),
    };
  }, [deadlines]);

  const totalYears = Math.max(1, timeRange.endYear - timeRange.startYear + 1);
  const timelineWidth = Math.max(1200, totalYears * 320);

  // Calculate total days in range
  const totalDays = useMemo(() => {
    const diff = timeRange.endDate.getTime() - timeRange.startDate.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, [timeRange]);

  // Calculate position for a date (returns percentage)
  const getDatePosition = (date: Date) => {
    const daysFromStart = Math.floor(
      (date.getTime() - timeRange.startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.max(0, Math.min(100, (daysFromStart / totalDays) * 100));
  };

  // Get today's position
  const todayPosition = useMemo(() => {
    const today = new Date();
    if (today < timeRange.startDate || today > timeRange.endDate) return null;
    return getDatePosition(today);
  }, [timeRange, totalDays]);

  // Scroll to today on mount
  useEffect(() => {
    if (todayRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const todayElement = todayRef.current;
      const containerWidth = container.scrollWidth;
      const todayLeft = (todayPosition || 0) / 100 * containerWidth;
      container.scrollLeft = todayLeft - container.clientWidth / 2;
    }
  }, [todayPosition]);

  // Generate year markers
  const yearMarkers = useMemo(() => {
    const years = [];
    for (let year = timeRange.startYear; year <= timeRange.endYear; year++) {
      const yearStart = new Date(year, 0, 1);
      const position = getDatePosition(yearStart);
      years.push({ year, position });
    }
    return years;
  }, [timeRange, totalDays]);

  // Sort deadlines by date
  const sortedDeadlines = useMemo(() => {
    return [...deadlines].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [deadlines]);

  const yearSegments = useMemo(() => {
    if (yearMarkers.length === 0) return [];
    return yearMarkers.map((marker, idx) => {
      const nextMarker = yearMarkers[idx + 1];
      const width = nextMarker ? Math.max(0, nextMarker.position - marker.position) : Math.max(0, 100 - marker.position);
      return {
        year: marker.year,
        start: marker.position,
        width,
        center: marker.position + width / 2,
      };
    });
  }, [yearMarkers]);

  return (
    <div className="flex h-full">
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full overflow-y-auto custom-scrollbar">
          {/* Event labels on the left - share vertical scroll */}
          <div className="flex-shrink-0 w-[280px] border-r-2 border-gray-200 dark:border-gray-800 pr-2">
            <div className="space-y-2 py-2">
              {sortedDeadlines.map(deadline => {
                const eventDate = new Date(deadline.date);
                const isPast = eventDate < new Date();
                const isSelected = selectedDeadline === deadline.id;

                return (
                  <div
                    key={deadline.id}
                    onClick={() => onSelectDeadline(deadline.id === selectedDeadline ? null : deadline.id)}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all',
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-900/50',
                      isPast && 'opacity-60'
                    )}
                    style={{ height: '52px' }}
                  >
                    <div className="flex-1 min-w-0">
                      <div
                        className={cn(
                          'text-sm font-medium text-black dark:text-white line-clamp-1',
                          isSelected && 'text-blue-600 dark:text-blue-400'
                        )}
                      >
                        {deadline.title}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        {format(eventDate, 'dd MMM yyyy', { locale: it })}
                      </div>
                    </div>
                    <div
                      className={cn(
                        'px-2 py-1 rounded text-xs font-semibold flex-shrink-0',
                        deadline.adjustedProbability >= 70
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                          : deadline.adjustedProbability >= 50
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      )}
                    >
                      {deadline.adjustedProbability}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline area with synced header */}
          <div className="flex-1 min-w-0 pl-4">
            <div
              ref={scrollContainerRef}
              className="h-full overflow-x-auto overflow-y-visible custom-scrollbar"
            >
              <div className="pb-6" style={{ width: `${timelineWidth}px` }}>
                <div className="sticky top-0 z-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
                  <div className="relative h-12">
                    <div className="absolute inset-0">
                      {yearSegments.map(segment => (
                        <div
                          key={`axis-line-${segment.year}`}
                          className="absolute top-0 bottom-0 border-l border-gray-200 dark:border-gray-800"
                          style={{ left: `${segment.start}%` }}
                        />
                      ))}
                      <div className="absolute top-0 bottom-0 border-l border-gray-200 dark:border-gray-800" style={{ left: '100%' }} />
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                      {yearSegments.map(segment => (
                        <div
                          key={`axis-label-${segment.year}`}
                          className="absolute -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-gray-600 dark:text-gray-300 drop-shadow-sm whitespace-nowrap"
                          style={{ left: `${segment.center}%`, top: '50%' }}
                        >
                          {segment.year}
                        </div>
                      ))}
                    </div>

                    {todayPosition !== null && (
                      <div
                        ref={todayRef}
                        className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                        style={{ left: `${todayPosition}%` }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-red-600 dark:text-red-400 font-semibold whitespace-nowrap">
                          Oggi
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative mt-4" style={{ height: `${sortedDeadlines.length * 60}px` }}>
                  {yearSegments.map((segment, idx) => (
                    <div
                      key={`band-${segment.year}`}
                      className={cn(
                        'absolute top-0 bottom-0 pointer-events-none',
                        idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/40' : 'bg-transparent'
                      )}
                      style={{
                        left: `${segment.start}%`,
                        width: `${segment.width}%`,
                      }}
                    >
                      <div className="absolute top-1 left-2 text-[10px] font-semibold uppercase tracking-tight text-gray-300 dark:text-gray-600">
                        {segment.year}
                      </div>
                    </div>
                  ))}

                  <div className="absolute inset-0 pointer-events-none">
                    {yearMarkers.map(({ position }) => (
                      <div
                        key={`grid-${position}`}
                        className="absolute top-0 bottom-0 border-l border-gray-200/60 dark:border-gray-800/80"
                        style={{ left: `${position}%` }}
                      />
                    ))}
                  </div>

                  {todayPosition !== null && (
                    <div className="absolute top-0 bottom-0 w-0.5 bg-red-500/40 z-10" style={{ left: `${todayPosition}%` }} />
                  )}

                  {sortedDeadlines.map((deadline, index) => {
                    const eventDate = new Date(deadline.date);
                    const position = getDatePosition(eventDate);
                    const isPast = eventDate < new Date();
                    const isSelected = selectedDeadline === deadline.id;
                    const rowHeight = 60;
                    const top = index * rowHeight;
                    const barWidth = 220;

                    return (
                      <div
                        key={deadline.id}
                        className="absolute"
                        style={{
                          top: `${top + 4}px`,
                          height: `${rowHeight - 8}px`,
                          left: `${position}%`,
                        }}
                      >
                        <div
                          onClick={() => onSelectDeadline(deadline.id === selectedDeadline ? null : deadline.id)}
                          className={cn(
                            'absolute left-0 top-0 h-full rounded-r-lg cursor-pointer transition-all group shadow-sm',
                            'hover:shadow-lg hover:z-10 hover:scale-105',
                            isSelected && 'ring-2 ring-blue-500 dark:ring-blue-400 z-20 shadow-lg',
                            isPast && 'opacity-60'
                          )}
                          style={{
                            width: `${barWidth}px`,
                            backgroundColor: getThemeColorHex(deadline.themes[0] || 'clima'),
                            opacity: Math.max(0.6, deadline.adjustedProbability / 100),
                          }}
                        >
                          <div className="absolute left-0 top-0 h-full flex items-center pl-3 pr-3 pointer-events-none">
                            <div className="text-xs font-medium text-white drop-shadow-md line-clamp-1">{deadline.title}</div>
                          </div>

                          <div
                            className={cn(
                              'absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 shadow-sm',
                              isSelected
                                ? 'border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900'
                                : 'border-white bg-white dark:bg-gray-900'
                            )}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

