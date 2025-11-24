'use client';

import { useState, useMemo } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addYears, subYears, getDay, startOfYear, eachMonthOfInterval } from 'date-fns';
import { it } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FilterState } from '@/types/deadline';
import { deadlines } from '@/data/deadlines';
import { getProbabilityColor, getThemeColor, getThemeColorHex, cn } from '@/lib/utils';
import { filterDeadlines } from '@/lib/filters';
import { DeadlineCard } from './DeadlineCard';

export function CalendarView({ filters }: { filters: FilterState }) {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const filteredDeadlines = useMemo(() => {
    return filterDeadlines(deadlines, filters);
  }, [filters]);

  const previousYear = () => setCurrentYear(currentYear - 1);
  const nextYear = () => setCurrentYear(currentYear + 1);

  const getDeadlinesForDay = (day: Date) => {
    return filteredDeadlines.filter(deadline => 
      isSameDay(new Date(deadline.date), day)
    );
  };

  const getDeadlinesForMonth = (month: Date) => {
    return filteredDeadlines.filter(deadline => 
      isSameMonth(new Date(deadline.date), month)
    );
  };

  const weekDays = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  const months = eachMonthOfInterval({
    start: new Date(currentYear, 0, 1),
    end: new Date(currentYear, 11, 31)
  });

  const yearDeadlines = useMemo(() => {
    return filteredDeadlines
      .filter(deadline => new Date(deadline.date).getFullYear() === currentYear)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filteredDeadlines, currentYear]);

  const renderMonthCalendar = (month: Date) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const firstDayOfWeek = getDay(monthStart);
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    const monthDeadlines = getDeadlinesForMonth(month);

    return (
      <div key={month.toISOString()} className="glass-card dark:glass-card-dark rounded-xl border border-white/20 dark:border-white/10 p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 text-center">
          {format(month, 'MMMM', { locale: it })}
        </h3>
        <div className="grid grid-cols-7 gap-1">
          {/* Week day headers */}
          {weekDays.map(day => (
            <div
              key={day}
              className="text-center text-[10px] font-semibold text-slate-500 dark:text-slate-400 py-1"
            >
              {day}
            </div>
          ))}

          {/* Empty cells for days before month start */}
          {Array.from({ length: adjustedFirstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Calendar days */}
          {daysInMonth.map(day => {
            const dayDeadlines = getDeadlinesForDay(day);
            const isToday = isSameDay(day, new Date());
            const isCurrentMonth = isSameMonth(day, month);

            return (
              <div
                key={day.toISOString()}
                className={cn(
                  'aspect-square border rounded text-[10px] p-0.5 transition-all hover:shadow-md hover:scale-110',
                  isToday && 'ring-2 ring-blue-500 ring-offset-1',
                  !isCurrentMonth && 'opacity-30',
                  dayDeadlines.length > 0 
                    ? 'glass dark:glass-dark border-blue-300/50 dark:border-blue-700/50' 
                    : 'glass dark:glass-dark border-white/20 dark:border-white/10'
                )}
                title={dayDeadlines.length > 0 ? `${dayDeadlines.length} eventi` : ''}
              >
                <div className="flex flex-col h-full">
                  <div className={cn(
                    'text-[10px] font-medium text-center',
                    isToday && 'text-blue-600 dark:text-blue-400 font-bold'
                  )}>
                    {format(day, 'd')}
                  </div>
                  {dayDeadlines.length > 0 && (
                    <div className="flex-1 flex items-center justify-center gap-0.5 mt-0.5">
                      {dayDeadlines.slice(0, 3).map((deadline, idx) => (
                        <div
                          key={deadline.id}
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: getThemeColorHex(deadline.themes[0]) }}
                        />
                      ))}
                      {dayDeadlines.length > 3 && (
                        <div className="text-[8px] text-slate-500">+</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {monthDeadlines.length > 0 && (
          <div className="mt-2 text-xs text-center text-slate-600 dark:text-slate-400">
            {monthDeadlines.length} evento{monthDeadlines.length !== 1 ? 'i' : ''}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="glass-card dark:glass-card-dark rounded-2xl shadow-2xl p-6 border border-white/20 dark:border-white/10">
        {/* Year Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={previousYear}
            className="p-2 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {currentYear}
          </h2>
          <button
            onClick={nextYear}
            className="p-2 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 rounded-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Year Calendar Grid - 12 months */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {months.map(month => renderMonthCalendar(month))}
        </div>
      </div>

      {/* Deadlines List for Selected Year */}
      <div className="glass-card dark:glass-card-dark rounded-2xl shadow-2xl p-6 border border-white/20 dark:border-white/10">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Scadenze del {currentYear}
        </h3>
        <div className="space-y-4">
          {yearDeadlines.length > 0 ? (
            yearDeadlines.map(deadline => (
              <DeadlineCard key={deadline.id} deadline={deadline} />
            ))
          ) : (
            <p className="text-slate-500 dark:text-slate-400 text-center py-8">
              Nessuna scadenza trovata per l&apos;anno {currentYear}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

