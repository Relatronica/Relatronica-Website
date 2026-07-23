'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Pizza, ShieldCheck, HeartHandshake, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const { t } = useI18n();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label={t('supportModal.close')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {/* Header Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 mb-4 shadow-sm">
                  <Pizza className="w-8 h-8 animate-bounce" />
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('supportModal.badge')}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('supportModal.title')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {t('supportModal.subtitle')}
                </p>
              </div>

              {/* Explanatory Paragraphs */}
              <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                <p className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                  {t('supportModal.paragraph1')}
                </p>
                <p>
                  {t('supportModal.paragraph2')}
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8">
                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-center">
                  <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">{t('supportModal.points.open')}</p>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-center">
                  <HeartHandshake className="w-4 h-4 text-amber-600 dark:text-amber-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">{t('supportModal.points.community')}</p>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-center">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-amber-900 dark:text-amber-200">{t('supportModal.points.independent')}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href="https://buymeacoffee.com/relatronica"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-amber-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>{t('supportModal.cta')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/about"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span>{t('supportModal.aboutLink')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
