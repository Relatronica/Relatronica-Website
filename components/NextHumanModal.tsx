'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Network, Sparkles, TrendingUp, TrendingDown, BarChart, Info } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export function NextHumanModal() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasSeenNextHuman = localStorage.getItem('nexthuman-welcome-seen');
    if (!hasSeenNextHuman) {
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (dontShowAgain) {
      localStorage.setItem('nexthuman-welcome-seen', 'true');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-700">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
          aria-label={t('nexthuman.modal.close')}
        >
          <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
        </button>

        <div className="p-8 pt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image src="/logo.png" alt="Relatronica Logo" fill className="object-contain" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('nexthuman.title')}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('nexthuman.subtitle')}</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <p className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                {t('nexthuman.modal.whatIs')}
              </p>
              <p className="text-[15px] text-slate-600 dark:text-slate-400 mb-4">
                {t('nexthuman.modal.description', {
                  modalAction1: t('nexthuman.modal.modalAction1'),
                  modalAction2: t('nexthuman.modal.modalAction2')
                }).split(/(\{modalAction1\}|\{modalAction2\})/).map((part, i) => {
                  if (part === '{modalAction1}') return <strong key={i} className="text-slate-900 dark:text-white">{t('nexthuman.modal.modalAction1')}</strong>;
                  if (part === '{modalAction2}') return <strong key={i} className="text-slate-900 dark:text-white">{t('nexthuman.modal.modalAction2')}</strong>;
                  return <span key={i}>{part}</span>;
                })}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              {[
                { icon: Calendar, color: 'blue', key: 'deadlines' },
                { icon: Network, color: 'purple', key: 'mapping' },
                { icon: Sparkles, color: 'orange', key: 'scenarios' },
              ].map(({ icon: Icon, color, key }) => (
                <div key={key} className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-${color}-50 dark:bg-${color}-950/50 flex-shrink-0`}>
                    <Icon className={`w-4 h-4 text-${color}-600 dark:text-${color}-400`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{t(`nexthuman.modal.features.${key}.title`)}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t(`nexthuman.modal.features.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                {t('nexthuman.modal.howItWorks')}
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { num: 1, key: 'explore', render: (text: string) => text },
                  { num: 2, key: 'filters', render: (text: string) => 
                    text.split(/(\{themes\}|\{probabilities\})/).map((part, i) => {
                      if (part === '{themes}') return <strong key={i}>{t('nexthuman.modal.steps.filters.themes')}</strong>;
                      if (part === '{probabilities}') return <strong key={i}>{t('nexthuman.modal.steps.filters.probabilities')}</strong>;
                      return <span key={i}>{part}</span>;
                    })
                  },
                  { num: 3, key: 'scenarios', render: (text: string) =>
                    text.split(/(\{optimistic\}|\{realistic\}|\{pessimistic\})/).map((part, i) => {
                      if (part === '{optimistic}') return <strong key={i}>{t('nexthuman.modal.steps.scenarios.optimistic')}</strong>;
                      if (part === '{realistic}') return <strong key={i}>{t('nexthuman.modal.steps.scenarios.realistic')}</strong>;
                      if (part === '{pessimistic}') return <strong key={i}>{t('nexthuman.modal.steps.scenarios.pessimistic')}</strong>;
                      return <span key={i}>{part}</span>;
                    })
                  },
                  { num: 4, key: 'connections', render: (text: string) => text },
                ].map(({ num, key, render }) => (
                  <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      {num}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{t(`nexthuman.modal.steps.${key}.title`)}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {render(t(`nexthuman.modal.steps.${key}.description`))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
                <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-1">{t('nexthuman.modal.importantNote.title')}</p>
                  <p className="text-xs text-amber-800 dark:text-amber-400/80">
                    {t('nexthuman.modal.importantNote.description')
                      .split(/(\{speculative\})/).map((part, i) => {
                        if (part === '{speculative}') return <strong key={i}>{t('nexthuman.modal.importantNote.speculative')}</strong>;
                        return <span key={i}>{part}</span>;
                      })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">{t('nexthuman.modal.dontShowAgain')}</span>
            </label>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('nexthuman.modal.startExploring')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
