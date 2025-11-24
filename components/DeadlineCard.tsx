'use client';

import { Deadline } from '@/types/deadline';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Calendar, TrendingUp, Globe } from 'lucide-react';
import { getProbabilityColor, getThemeColor, cn } from '@/lib/utils';

interface DeadlineCardProps {
  deadline: Deadline;
  variant?: 'default' | 'timeline';
}

const probabilityLabels: Record<string, string> = {
  low: 'Bassa probabilità',
  medium: 'Media probabilità',
  high: 'Alta probabilità',
  'very-high': 'Molto alta probabilità',
};

const impactLabels: Record<string, string> = {
  local: 'Impatto locale',
  regional: 'Impatto regionale',
  global: 'Impatto globale',
};

const categoryLabels: Record<string, string> = {
  milestone: 'Traguardo importante',
  threshold: 'Soglia critica',
  'tipping-point': 'Punto di non ritorno',
  transformation: 'Trasformazione epocale',
};

export function DeadlineCard({ deadline, variant = 'default' }: DeadlineCardProps) {
  const isPast = new Date(deadline.date) < new Date();

  if (variant === 'timeline') {
    return (
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
              {deadline.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-700 mb-3">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>
                <span className="font-medium">Previsto per: </span>
                {format(new Date(deadline.date), 'd MMMM yyyy', { locale: it })}
              </span>
            </div>
          </div>
          <div className={cn(
            'px-3 py-1.5 rounded-full text-xs font-semibold border ml-3 flex-shrink-0',
            getProbabilityColor(deadline.probability)
          )}>
            {deadline.probabilityValue}% di probabilità
          </div>
        </div>

        <div className="mb-4">
          <p className="text-slate-800 leading-relaxed text-[15px] mb-2">
            {deadline.description}
          </p>
          {deadline.sources && deadline.sources.length > 0 && (
            <p className="text-xs text-slate-500 italic">
              Fonti: {deadline.sources.join(', ')}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200">
          {deadline.impact && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700">
                <span className="font-medium">Portata: </span>
                {impactLabels[deadline.impact]}
              </span>
            </div>
          )}
          {deadline.category && (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700">
                <span className="font-medium">Tipo: </span>
                {categoryLabels[deadline.category]}
              </span>
            </div>
          )}
          <div className="flex flex-wrap gap-1">
            {deadline.themes.map(theme => (
              <span
                key={theme}
                className={cn(
                  'px-2 py-1 rounded text-xs font-medium text-white',
                  getThemeColor(theme)
                )}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      'p-5 rounded-xl border transition-all hover:shadow-xl hover:scale-[1.02]',
      isPast
        ? 'glass-card dark:glass-card-dark opacity-75 border-white/20 dark:border-white/10'
        : 'glass-card dark:glass-card-dark border-white/20 dark:border-white/10'
    )}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
            {deadline.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(deadline.date), 'd MMMM yyyy', { locale: it })}</span>
            {isPast && (
              <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                Passato
              </span>
            )}
          </div>
        </div>
        <div className={cn(
          'px-3 py-1.5 rounded-full text-sm font-medium border',
          getProbabilityColor(deadline.probability)
        )}>
          {probabilityLabels[deadline.probability]} ({deadline.probabilityValue}%)
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 mb-4">
        {deadline.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-3">
        {deadline.impact && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Impatto: {impactLabels[deadline.impact]}
            </span>
          </div>
        )}
        {deadline.category && (
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {categoryLabels[deadline.category]}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {deadline.themes.map(theme => (
          <span
            key={theme}
            className={cn(
              'px-3 py-1 rounded-full text-sm font-medium text-white',
              getThemeColor(theme)
            )}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </span>
        ))}
      </div>

      {deadline.sources && deadline.sources.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Fonti: {deadline.sources.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}

