'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, HandHeart, ShieldCheck, HeartHandshake, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
          {/* Backdrop with smooth blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card - Apple / Bento aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="relative w-full max-w-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all"
              aria-label={t('supportModal.close')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="p-7 sm:p-9">
              {/* Header Icon & Branding */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative w-9 h-9">
                    <Image
                      src="/logo.png"
                      alt="Relatronica Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-2.5 rounded-2xl nordic-sage-bg nordic-sage-text">
                    <HandHeart className="w-6 h-6" />
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider nordic-sage-bg nordic-sage-text mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('supportModal.badge')}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('supportModal.title')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed max-w-md">
                  {t('supportModal.subtitle')}
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    {t('supportModal.paragraph1')}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm px-1">
                  {t('supportModal.paragraph2')}
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7">
                <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-center">
                  <ShieldCheck className="w-4 h-4 nordic-sage-text mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{t('supportModal.points.open')}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-center">
                  <HeartHandshake className="w-4 h-4 nordic-sage-text mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{t('supportModal.points.community')}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-center">
                  <Sparkles className="w-4 h-4 nordic-sage-text mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{t('supportModal.points.independent')}</p>
                </div>
              </div>

              {/* Primary & Secondary Actions */}
              <div className="space-y-2.5">
                <a
                  href="https://buymeacoffee.com/relatronica"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>{t('supportModal.cta')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/about"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-full font-medium text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
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
