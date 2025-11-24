'use client';

import { useMemo } from 'react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { FilterState } from '@/types/deadline';
import { deadlines } from '@/data/deadlines';
import { getProbabilityColor, getThemeColor, getThemeColorHex, cn } from '@/lib/utils';
import { filterDeadlines } from '@/lib/filters';
import { DeadlineCard } from './DeadlineCard';

export function TimelineView({ filters }: { filters: FilterState }) {
  const filteredDeadlines = useMemo(() => {
    return filterDeadlines(deadlines, filters)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filters]);

  // Group deadlines by year
  const deadlinesByYear = useMemo(() => {
    const grouped: Record<number, typeof filteredDeadlines> = {};
    filteredDeadlines.forEach(deadline => {
      const year = new Date(deadline.date).getFullYear();
      if (!grouped[year]) {
        grouped[year] = [];
      }
      grouped[year].push(deadline);
    });
    return grouped;
  }, [filteredDeadlines]);

  const years = Object.keys(deadlinesByYear)
    .map(Number)
    .sort((a, b) => a - b);

  const currentYear = new Date().getFullYear();

  if (years.length === 0) {
    return (
      <div className="glass-card dark:glass-card-dark rounded-2xl shadow-2xl p-12 border border-white/20 dark:border-white/10 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          Nessuna scadenza trovata con i filtri selezionati
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500" />

      <div className="space-y-12">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative pl-20">
            {/* Year marker */}
            <div className="absolute left-0 top-0">
              <div className={cn(
                'w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg',
                year <= currentYear
                  ? 'bg-slate-400 dark:bg-slate-600'
                  : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
              )}>
                {year}
              </div>
            </div>

            {/* Year label */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {year}
              </h2>
              {year <= currentYear && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Anno passato
                </p>
              )}
            </div>

            {/* Deadlines for this year */}
            <div className="space-y-6">
              {deadlinesByYear[year].map((deadline, deadlineIndex) => {
                const deadlineDate = new Date(deadline.date);
                const isPast = deadlineDate < new Date();

                return (
                  <div
                    key={deadline.id}
                    className={cn(
                      'relative pl-6 border-l-4 rounded-r-xl transition-all hover:shadow-xl hover:scale-[1.02]',
                      isPast
                        ? 'border-slate-300 dark:border-slate-600'
                        : '',
                      'glass-card dark:glass-card-dark border border-white/20 dark:border-white/10'
                    )}
                    style={{
                      borderLeftColor: isPast 
                        ? undefined 
                        : getThemeColorHex(deadline.themes[0])
                    }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={cn(
                        'absolute -left-[22px] top-4 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800',
                        isPast
                          ? 'bg-slate-400 dark:bg-slate-600'
                          : getThemeColor(deadline.themes[0])
                      )}
                    />

                    <DeadlineCard deadline={deadline} variant="timeline" />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

