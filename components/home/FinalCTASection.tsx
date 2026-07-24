'use client';

import { ExternalLink } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function FinalCTASection() {
  const { t } = useI18n();

  return (
    <FadeIn>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t('home.finalCta.title')}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          {t('home.finalCta.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://www.instagram.com/relatronica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-medium hover:shadow-md transition-all backdrop-blur-sm"
            >
              {t('home.finalCta.instagram')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://www.linkedin.com/company/relatronica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 font-medium hover:shadow-md transition-all backdrop-blur-sm"
            >
              {t('home.finalCta.linkedin')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
}
