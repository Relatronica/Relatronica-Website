'use client';

import { Deadline } from '@/types/deadline';
import { format } from 'date-fns';
import { it, enUS } from 'date-fns/locale';
import { Calendar, TrendingUp, Globe } from 'lucide-react';
import { getProbabilityColor, getThemeColor, cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface DeadlineCardProps {
  deadline: Deadline;
  variant?: 'default' | 'timeline';
}

export function DeadlineCard({ deadline, variant = 'default' }: DeadlineCardProps) {
  const { t, locale } = useI18n();
  const isPast = new Date(deadline.date) < new Date();
  const dateLocale = locale === 'en' ? enUS : it;
  
  // Traduci le label
  const probabilityLabels: Record<string, string> = {
    low: t('deadlines.card.probabilityLabels.low'),
    medium: t('deadlines.card.probabilityLabels.medium'),
    high: t('deadlines.card.probabilityLabels.high'),
    'very-high': t('deadlines.card.probabilityLabels.veryHigh'),
  };
  
  const impactLabels: Record<string, string> = {
    local: t('deadlines.card.impactLabels.local'),
    regional: t('deadlines.card.impactLabels.regional'),
    global: t('deadlines.card.impactLabels.global'),
  };
  
  const categoryLabels: Record<string, string> = {
    milestone: t('deadlines.card.categoryLabels.milestone'),
    threshold: t('deadlines.card.categoryLabels.threshold'),
    'tipping-point': t('deadlines.card.categoryLabels.tippingPoint'),
    transformation: t('deadlines.card.categoryLabels.transformation'),
  };
  
  // Traduci titolo e descrizione del deadline se disponibili
  const deadlineTitleKey = `deadlines.${deadline.id}.title`;
  const deadlineDescriptionKey = `deadlines.${deadline.id}.description`;
  const translatedTitle = t(deadlineTitleKey);
  const translatedDescription = t(deadlineDescriptionKey);
  const title = translatedTitle !== deadlineTitleKey ? translatedTitle : deadline.title;
  const description = translatedDescription !== deadlineDescriptionKey ? translatedDescription : deadline.description;
  
  // Traduci le azioni se presenti
  const translatedActions = deadline.actions?.map((action, index) => {
    const actionTitleKey = `deadlines.${deadline.id}.actions.${index}.title`;
    const actionDescriptionKey = `deadlines.${deadline.id}.actions.${index}.description`;
    const translatedActionTitle = t(actionTitleKey);
    const translatedActionDescription = t(actionDescriptionKey);
    
    return {
      ...action,
      title: translatedActionTitle !== actionTitleKey ? translatedActionTitle : action.title,
      description: translatedActionDescription !== actionDescriptionKey ? translatedActionDescription : action.description,
      links: action.links?.map(link => {
        const linkLabelKey = `deadlines.${deadline.id}.actions.${index}.links.${link.label}`;
        const translatedLinkLabel = t(linkLabelKey);
        return {
          ...link,
          label: translatedLinkLabel !== linkLabelKey ? translatedLinkLabel : link.label
        };
      }) || []
    };
  });
  
  const displayDeadline = {
    ...deadline,
    title,
    description,
    actions: translatedActions
  };

  if (variant === 'timeline') {
    return (
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
              {displayDeadline.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-700 mb-3">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>
                <span className="font-medium">{t('deadlines.card.expectedFor')} </span>
                {format(new Date(displayDeadline.date), 'd MMMM yyyy', { locale: dateLocale })}
              </span>
            </div>
          </div>
          <div className={cn(
            'px-3 py-1.5 rounded-full text-xs font-semibold border ml-3 flex-shrink-0',
            getProbabilityColor(displayDeadline.probability)
          )}>
            {displayDeadline.probabilityValue}% {t('deadlines.card.probability')}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-slate-800 leading-relaxed text-[15px] mb-2">
            {displayDeadline.description}
          </p>
          {displayDeadline.sources && displayDeadline.sources.length > 0 && (
            <p className="text-xs text-slate-500 italic">
              {t('deadlines.card.sources')} {displayDeadline.sources.join(', ')}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200">
          {displayDeadline.impact && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700">
                <span className="font-medium">{t('deadlines.card.scope')} </span>
                {impactLabels[displayDeadline.impact]}
              </span>
            </div>
          )}
          {displayDeadline.category && (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700">
                <span className="font-medium">{t('deadlines.card.type')} </span>
                {categoryLabels[displayDeadline.category]}
              </span>
            </div>
          )}
          <div className="flex flex-wrap gap-1">
            {displayDeadline.themes.map(theme => {
              const themeLabel = t(`nexthuman.themes.${theme}`) || (theme.charAt(0).toUpperCase() + theme.slice(1));
              return (
                <span
                  key={theme}
                  className={cn(
                    'px-2 py-1 rounded text-xs font-medium text-white',
                    getThemeColor(theme)
                  )}
                >
                  {themeLabel}
                </span>
              );
            })}
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
            {displayDeadline.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(displayDeadline.date), 'd MMMM yyyy', { locale: dateLocale })}</span>
            {isPast && (
              <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                {t('deadlines.card.past')}
              </span>
            )}
          </div>
        </div>
        <div className={cn(
          'px-3 py-1.5 rounded-full text-sm font-medium border',
          getProbabilityColor(displayDeadline.probability)
        )}>
          {probabilityLabels[displayDeadline.probability]} ({displayDeadline.probabilityValue}%)
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 mb-4">
        {displayDeadline.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-3">
        {displayDeadline.impact && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {t('deadlines.card.impact')} {impactLabels[displayDeadline.impact]}
            </span>
          </div>
        )}
        {displayDeadline.category && (
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {categoryLabels[displayDeadline.category]}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {displayDeadline.themes.map(theme => {
          const themeLabel = t(`nexthuman.themes.${theme}`) || (theme.charAt(0).toUpperCase() + theme.slice(1));
          return (
            <span
              key={theme}
              className={cn(
                'px-3 py-1 rounded-full text-sm font-medium text-white',
                getThemeColor(theme)
              )}
            >
              {themeLabel}
            </span>
          );
        })}
      </div>

      {displayDeadline.sources && displayDeadline.sources.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t('deadlines.card.sources')} {displayDeadline.sources.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}

