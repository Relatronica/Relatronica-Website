'use client';

import { Sparkles, Users, Network, Shield } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { SpeculativeDesignSVG, CivicTechSVG, KnowledgeMappingSVG, ResponsibleTechSVG } from '@/components/feature-graphics/FeatureSVGs';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function FeaturesBento() {
  const { t } = useI18n();

  const features = [
    {
      icon: Sparkles,
      title: t('home.features.speculativeDesign.title'),
      description: t('home.features.speculativeDesign.description'),
      color: 'purple',
      href: '/nexthuman',
    },
    {
      icon: Users,
      title: t('home.features.civicTech.title'),
      description: t('home.features.civicTech.description'),
      color: 'green',
      href: '/progetti',
    },
    {
      icon: Network,
      title: t('home.features.knowledgeMapping.title'),
      description: t('home.features.knowledgeMapping.description'),
      color: 'orange',
      href: '/observatory',
    },
    {
      icon: Shield,
      title: t('home.features.responsibleTech.title'),
      description: t('home.features.responsibleTech.description'),
      color: 'emerald',
      href: '/manifesto',
    },
  ];

  return (
    <div className="mb-28">
      <FadeIn className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider nordic-sage-text">
            Aree di Ricerca & Pratica
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-1">
            Cosa Facciamo
          </h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
          I quattro pilastri attraverso cui esploriamo l’intersezione tra tecnologia, società e design speculativo.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.08}>
        {/* Feature 1: Speculative Design */}
        <StaggerItem>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="bento-card relative h-full p-6 sm:p-8 overflow-hidden flex flex-col sm:flex-row gap-6 items-center justify-between"
          >
            <div className="w-full sm:w-5/12 shrink-0">
              <SpeculativeDesignSVG />
            </div>

            <div className="w-full sm:w-7/12 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full nordic-moss-bg nordic-moss-text text-xs font-medium border border-emerald-900/10 dark:border-emerald-100/10">
                    Pilastro Metodologico
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {features[0].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {features[0].description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md nordic-moss-bg nordic-moss-text text-xs font-medium">
                  #DesignFiction
                </span>
                <span className="px-2.5 py-1 rounded-md nordic-moss-bg nordic-moss-text text-xs font-medium">
                  #FuturiPossibili
                </span>
              </div>
            </div>
          </motion.div>
        </StaggerItem>

        {/* Feature 2: Civic Tech */}
        <StaggerItem>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="bento-card relative h-full p-6 sm:p-8 overflow-hidden flex flex-col sm:flex-row gap-6 items-center justify-between"
          >
            <div className="w-full sm:w-5/12 shrink-0">
              <CivicTechSVG />
            </div>

            <div className="w-full sm:w-7/12 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full nordic-sage-bg nordic-sage-text text-xs font-medium">
                    Impatto Sociale
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {features[1].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {features[1].description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md nordic-sage-bg nordic-sage-text text-xs font-medium">
                  #OpenGov
                </span>
                <span className="px-2.5 py-1 rounded-md nordic-sage-bg nordic-sage-text text-xs font-medium">
                  #Partecipazione
                </span>
              </div>
            </div>
          </motion.div>
        </StaggerItem>

        {/* Feature 3: Knowledge Mapping */}
        <StaggerItem>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="bento-card relative h-full p-6 sm:p-8 overflow-hidden flex flex-col sm:flex-row gap-6 items-center justify-between"
          >
            <div className="w-full sm:w-5/12 shrink-0">
              <KnowledgeMappingSVG />
            </div>

            <div className="w-full sm:w-7/12 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full nordic-terracotta-bg nordic-terracotta-text text-xs font-medium">
                    Ricerca & Analisi
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {features[2].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {features[2].description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md nordic-terracotta-bg nordic-terracotta-text text-xs font-medium">
                  #OpenKnowledge
                </span>
                <span className="px-2.5 py-1 rounded-md nordic-terracotta-bg nordic-terracotta-text text-xs font-medium">
                  #Mappatura
                </span>
              </div>
            </div>
          </motion.div>
        </StaggerItem>

        {/* Feature 4: Responsible Tech */}
        <StaggerItem>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="bento-card relative h-full p-6 sm:p-8 overflow-hidden flex flex-col sm:flex-row gap-6 items-center justify-between"
          >
            <div className="w-full sm:w-5/12 shrink-0">
              <ResponsibleTechSVG />
            </div>

            <div className="w-full sm:w-7/12 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full nordic-slate-bg nordic-slate-text text-xs font-medium">
                    Etica & Sostenibilità
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {features[3].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {features[3].description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md nordic-slate-bg nordic-slate-text text-xs font-medium">
                  #TechForGood
                </span>
                <span className="px-2.5 py-1 rounded-md nordic-slate-bg nordic-slate-text text-xs font-medium">
                  #HumanCentered
                </span>
              </div>
            </div>
          </motion.div>
        </StaggerItem>
      </StaggerChildren>
    </div>
  );
}
