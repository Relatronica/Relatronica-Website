'use client';

import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function ManifestoQuoteSection() {
  const { t } = useI18n();

  return (
    <FadeIn className="mb-28">
      <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900" />
        <div className="relative p-12 md:p-16 text-center">
          <Quote className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 italic">
            &ldquo;{t('home.manifestoQuote')}&rdquo;
          </blockquote>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/manifesto"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
            >
              {t('home.readManifesto')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
}
