'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, HandHeart, ShieldCheck, HeartHandshake, Sparkles, ExternalLink, ArrowRight, Pizza, Code2, Megaphone } from 'lucide-react';
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

          {/* Modal Card - Apple / Bento aesthetic matching the site design system */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="relative w-full max-w-2xl apple-card rounded-3xl shadow-2xl overflow-hidden z-10 my-auto bg-white/95 dark:bg-[#0f1115]/95 border border-foreground/10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-foreground/50 hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label={t('supportModal.close')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="p-6 sm:p-8">
              {/* Header Icon & Branding */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/logo.png"
                      alt="Relatronica Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-2 rounded-2xl nordic-sage-bg nordic-sage-text">
                    <HandHeart className="w-5 h-5" />
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider nordic-sage-bg nordic-sage-text mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('supportModal.badge')}
                </span>

                <h3 className="text-2xl font-bold text-foreground">
                  {t('supportModal.title')}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 mt-1.5 leading-relaxed max-w-lg">
                  {t('supportModal.subtitle')}
                </p>
              </div>

              {/* 3 Support Ways Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {/* 1. Pizza / Donation Card - Nordic Terracotta / Warm accent */}
                <div className="flex flex-col justify-between p-4 rounded-2xl bento-card bento-card-hover text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-xl nordic-terracotta-bg nordic-terracotta-text">
                        <Pizza className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">
                        {t('supportModal.ways.pizza.title')}
                      </h4>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                      {t('supportModal.ways.pizza.description')}
                    </p>
                  </div>
                  <a
                    href="https://buymeacoffee.com/relatronica"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                  >
                    <span>{t('supportModal.ways.pizza.cta')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 2. Code / Contribution Card - Nordic Sage / Green accent */}
                <div className="flex flex-col justify-between p-4 rounded-2xl bento-card bento-card-hover text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-xl nordic-sage-bg nordic-sage-text">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">
                        {t('supportModal.ways.code.title')}
                      </h4>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                      {t('supportModal.ways.code.description')}
                    </p>
                  </div>
                  <a
                    href="https://github.com/Relatronica"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold apple-button-secondary transition-colors shadow-sm"
                  >
                    <span>{t('supportModal.ways.code.cta')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 3. Share / Voice Card - Nordic Moss / Slate accent */}
                <div className="flex flex-col justify-between p-4 rounded-2xl bento-card bento-card-hover text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-xl nordic-moss-bg nordic-moss-text">
                        <Megaphone className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">
                        {t('supportModal.ways.share.title')}
                      </h4>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                      {t('supportModal.ways.share.description')}
                    </p>
                  </div>
                  <Link
                    href="/manifesto"
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold apple-button-secondary transition-colors shadow-sm"
                  >
                    <span>{t('supportModal.ways.share.cta')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Guarantees / Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-3 border-t border-foreground/10 text-center text-xs">
                <div className="flex items-center justify-center gap-1.5 text-foreground/70">
                  <ShieldCheck className="w-3.5 h-3.5 nordic-sage-text shrink-0" />
                  <span>{t('supportModal.points.open')}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-foreground/70">
                  <HeartHandshake className="w-3.5 h-3.5 nordic-sage-text shrink-0" />
                  <span>{t('supportModal.points.community')}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-foreground/70">
                  <Sparkles className="w-3.5 h-3.5 nordic-sage-text shrink-0" />
                  <span>{t('supportModal.points.independent')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

