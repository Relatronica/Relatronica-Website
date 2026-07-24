'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Radio } from 'lucide-react';
import { StaggerChildren, StaggerItem } from '@/components/motion';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function ResourceHub() {
  const { t } = useI18n();

  return (
    <StaggerChildren className="grid md:grid-cols-2 gap-5 mb-28" staggerDelay={0.12}>
      <StaggerItem>
        <Link href="/observatory" className="group block h-full">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3.5 rounded-2xl nordic-terracotta-bg nordic-terracotta-text">
                  <Radio className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full nordic-terracotta-bg nordic-terracotta-text text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400 animate-pulse" />
                  {t('home.resources.observatory.badge')}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                {t('home.resources.observatory.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {t('home.resources.observatory.description')}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold nordic-terracotta-text">
              <span>{"Accedi all'Osservatorio"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </motion.div>
        </Link>
      </StaggerItem>

      <StaggerItem>
        <Link href="/learn" className="group block h-full">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3.5 rounded-2xl nordic-sage-bg nordic-sage-text">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full nordic-sage-bg nordic-sage-text text-xs font-medium">
                  {t('home.resources.academy.badge')}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                {t('home.resources.academy.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {t('home.resources.academy.description')}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold nordic-sage-text">
              <span>{"Esplora l'Academy"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </motion.div>
        </Link>
      </StaggerItem>
    </StaggerChildren>
  );
}
