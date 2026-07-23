'use client';

import { useEffect, useState } from 'react';
import { X, Calendar, Network, Sparkles, Info } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface NextHumanIntroPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NextHumanIntroPanel({ open, onOpenChange }: NextHumanIntroPanelProps) {
  const { t } = useI18n();
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    setDontShowAgain(localStorage.getItem('nexthuman-welcome-seen') === 'true');
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (dontShowAgain) {
        localStorage.setItem('nexthuman-welcome-seen', 'true');
      } else {
        localStorage.removeItem('nexthuman-welcome-seen');
      }
      onOpenChange(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dontShowAgain, onOpenChange]);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('nexthuman-welcome-seen', 'true');
    } else {
      localStorage.removeItem('nexthuman-welcome-seen');
    }
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/25 dark:bg-black/45 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            aria-hidden
          />

          <motion.aside
            role="dialog"
            aria-modal={isMobile}
            aria-label={t('nexthuman.modal.panelAria')}
            className={cn(
              'fixed z-40 flex flex-col overflow-hidden',
              'border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 shadow-2xl backdrop-blur-xl',
              'inset-x-0 bottom-0 max-h-[85vh] rounded-t-3xl',
              'md:inset-x-auto md:right-4 md:top-32 md:bottom-8 md:w-[400px] md:max-h-[calc(100vh-10.5rem)] md:rounded-3xl'
            )}
            initial={isMobile ? { y: '100%', opacity: 0.9 } : { x: 28, opacity: 0 }}
            animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
            exit={isMobile ? { y: '100%', opacity: 0.9 } : { x: 28, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 36 }}
          >
            <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-11 h-11 flex-shrink-0">
                  <Image src="/logo.png" alt="Relatronica Logo" fill className="object-contain" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {t('nexthuman.title')}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {t('nexthuman.subtitle')}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                aria-label={t('nexthuman.modal.close')}
              >
                <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5 text-slate-700 dark:text-slate-300 custom-scrollbar">
              <div>
                <p className="text-base font-medium text-slate-900 dark:text-white mb-2">
                  {t('nexthuman.modal.whatIs')}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('nexthuman.modal.description', {
                    modalAction1: t('nexthuman.modal.modalAction1'),
                    modalAction2: t('nexthuman.modal.modalAction2'),
                  })
                    .split(/(\{modalAction1\}|\{modalAction2\})/)
                    .map((part, i) => {
                      if (part === '{modalAction1}') {
                        return (
                          <strong key={i} className="text-slate-900 dark:text-white">
                            {t('nexthuman.modal.modalAction1')}
                          </strong>
                        );
                      }
                      if (part === '{modalAction2}') {
                        return (
                          <strong key={i} className="text-slate-900 dark:text-white">
                            {t('nexthuman.modal.modalAction2')}
                          </strong>
                        );
                      }
                      return <span key={i}>{part}</span>;
                    })}
                </p>
              </div>

              <div className="space-y-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                {[
                  { icon: Calendar, key: 'deadlines', iconClass: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400' },
                  { icon: Network, key: 'mapping', iconClass: 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400' },
                  { icon: Sparkles, key: 'scenarios', iconClass: 'bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400' },
                ].map(({ icon: Icon, key, iconClass }) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className={cn('p-2 rounded-lg flex-shrink-0', iconClass)}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                        {t(`nexthuman.modal.features.${key}.title`)}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t(`nexthuman.modal.features.${key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-base font-medium text-slate-900 dark:text-white mb-3">
                  {t('nexthuman.modal.howItWorks')}
                </p>
                <div className="space-y-2">
                  {[
                    { num: 1, key: 'explore', render: (text: string) => text },
                    {
                      num: 2,
                      key: 'filters',
                      render: (text: string) =>
                        text.split(/(\{themes\}|\{probabilities\})/).map((part, i) => {
                          if (part === '{themes}') return <strong key={i}>{t('nexthuman.modal.steps.filters.themes')}</strong>;
                          if (part === '{probabilities}') {
                            return <strong key={i}>{t('nexthuman.modal.steps.filters.probabilities')}</strong>;
                          }
                          return <span key={i}>{part}</span>;
                        }),
                    },
                    {
                      num: 3,
                      key: 'scenarios',
                      render: (text: string) =>
                        text.split(/(\{optimistic\}|\{realistic\}|\{pessimistic\})/).map((part, i) => {
                          if (part === '{optimistic}') {
                            return <strong key={i}>{t('nexthuman.modal.steps.scenarios.optimistic')}</strong>;
                          }
                          if (part === '{realistic}') {
                            return <strong key={i}>{t('nexthuman.modal.steps.scenarios.realistic')}</strong>;
                          }
                          if (part === '{pessimistic}') {
                            return <strong key={i}>{t('nexthuman.modal.steps.scenarios.pessimistic')}</strong>;
                          }
                          return <span key={i}>{part}</span>;
                        }),
                    },
                    { num: 4, key: 'connections', render: (text: string) => text },
                  ].map(({ num, key, render }) => (
                    <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                        {num}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                          {t(`nexthuman.modal.steps.${key}.title`)}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {render(t(`nexthuman.modal.steps.${key}.description`))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
                <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 dark:text-amber-300 mb-1">
                    {t('nexthuman.modal.importantNote.title')}
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-400/80 leading-relaxed">
                    {t('nexthuman.modal.importantNote.description')
                      .split(/(\{speculative\})/)
                      .map((part, i) => {
                        if (part === '{speculative}') {
                          return <strong key={i}>{t('nexthuman.modal.importantNote.speculative')}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                      })}
                  </p>
                </div>
              </div>
            </div>

            <div className="shrink-0 px-5 py-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 dark:bg-slate-800"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {t('nexthuman.modal.dontShowAgain')}
                </span>
              </label>
              <button
                onClick={handleClose}
                className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                {t('nexthuman.modal.startExploring')}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
