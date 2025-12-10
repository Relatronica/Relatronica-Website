'use client';

import { Deadline } from '@/types/deadline';
import { cn } from '@/lib/utils';
import { DeadlineCard } from '../DeadlineCard';
import { ExternalLink, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface WhiteboardInspectorProps {
  deadline: Deadline & { adjustedProbability?: number };
  onClose: () => void;
  className?: string;
}

export function WhiteboardInspector({ deadline, onClose, className }: WhiteboardInspectorProps) {
  const { t } = useI18n();
  return (
    <aside
      className={cn(
        'absolute top-6 right-6 z-30 w-[320px] max-w-full rounded-3xl border border-gray-200/70 bg-white/95 shadow-2xl backdrop-blur-xl flex flex-col max-h-[calc(100%-3rem)]',
        className
      )}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-1 h-6 rounded-full" style={{ backgroundColor: deadline.adjustedProbability !== undefined && deadline.adjustedProbability >= 80 ? '#ef4444' : deadline.adjustedProbability !== undefined && deadline.adjustedProbability >= 60 ? '#f59e0b' : '#10b981' }} />
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold">{t('nexthuman.view.inspector.info')}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={t('nexthuman.view.inspector.closeDetails')}
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="px-5 pt-5 pb-4">
          <DeadlineCard deadline={deadline} variant="timeline" />
        </div>

        {deadline.actions && deadline.actions.length > 0 && (
          <div className="px-5 py-5 space-y-3 border-t border-gray-200 bg-gray-50/50">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-700 mb-1">{t('nexthuman.view.inspector.whatCanYouDo')}</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {t('nexthuman.view.inspector.actionsDescription')}
              </p>
            </div>
            {deadline.actions.map((action, index) => {
              // Traduci titolo e descrizione dell'azione
              const actionTitleKey = `deadlines.${deadline.id}.actions.${index}.title`;
              const actionDescriptionKey = `deadlines.${deadline.id}.actions.${index}.description`;
              const translatedActionTitle = t(actionTitleKey);
              const translatedActionDescription = t(actionDescriptionKey);
              const displayActionTitle = translatedActionTitle !== actionTitleKey ? translatedActionTitle : action.title;
              const displayActionDescription = translatedActionDescription !== actionDescriptionKey ? translatedActionDescription : action.description;
              
              return (
                <div
                  key={`${deadline.id}-action-${index}`}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-base font-semibold text-gray-900 mb-2">{displayActionTitle}</p>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    {displayActionDescription}
                  </p>
                  {action.links && action.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                      {action.links.filter(link => link.url && link.url.trim()).map((link, linkIdx) => {
                        // Traduci la label del link
                        const linkLabelKey = `deadlines.${deadline.id}.actions.${index}.links.${link.label}`;
                        const translatedLinkLabel = t(linkLabelKey);
                        const displayLinkLabel = translatedLinkLabel !== linkLabelKey ? translatedLinkLabel : link.label;
                        const normalizedUrl = link.url.startsWith('http') ? link.url : `https://${link.url}`;
                        return (
                          <a
                            key={`${link.url}-${linkIdx}`}
                            href={normalizedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (!link.url || !link.url.trim()) {
                                e.preventDefault();
                                return;
                              }
                            }}
                            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {displayLinkLabel}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}


