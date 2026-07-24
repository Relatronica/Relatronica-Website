'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Hero3DWrapper } from '@/components/hero/Hero3DWrapper';
import { FadeIn, TextReveal } from '@/components/motion';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useI18n();

  const tagline = t('home.tagline', {
    action1: t('home.action1'),
    action2: t('home.action2'),
    action3: t('home.action3'),
  });
  const parts = tagline.split(/(\{action1\}|\{action2\}|\{action3\})/);

  return (
    <div className="relative text-center mb-28 min-h-[82vh] flex flex-col justify-center items-center pb-16">
      {/* 3D Interactive Canvas Background - Full Bleed */}
      <div className="absolute inset-y-0 -left-6 -right-6 md:-left-12 md:-right-12 lg:-left-24 lg:-right-24 pointer-events-none overflow-hidden z-0">
        <Hero3DWrapper />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn delay={0.1} direction="none">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            {t('home.badge')}
          </div>
        </FadeIn>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-slate-900 dark:text-white leading-[1.05] tracking-tight">
          <TextReveal text={t('home.heroTitle')} delay={0.2} />
        </h1>

        <FadeIn delay={0.6}>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {parts.map((part, i) => {
              if (part === '{action1}') return <span key={i} className="font-semibold text-slate-900 dark:text-white">{t('home.action1')}</span>;
              if (part === '{action2}') return <span key={i} className="font-semibold text-slate-900 dark:text-white">{t('home.action2')}</span>;
              if (part === '{action3}') return <span key={i} className="font-semibold text-slate-900 dark:text-white">{t('home.action3')}</span>;
              return <span key={i}>{part}</span>;
            })}
          </p>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/progetti"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('home.exploreCta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/90 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md backdrop-blur-sm"
              >
                {t('home.manifestoCta')}
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* Absolute Positioned Scroll Indicator (Bottom Centered) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
        <FadeIn delay={1.0}>
          <div className="flex flex-col items-center gap-2 text-xs font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
            <span>{t('common.learnMore') || 'Scopri di più'}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm"
            >
              <ArrowRight className="w-4 h-4 rotate-90 text-slate-700 dark:text-slate-300" />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
