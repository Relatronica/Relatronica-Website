'use client';

import Link from 'next/link';
import {
  ArrowRight, Sparkles, Users, Network, Shield,
  BookOpen, Radio, Quote, Gamepad2, Lock, ExternalLink
} from 'lucide-react';
import { Hero3DWrapper } from '@/components/hero/Hero3DWrapper';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem, TextReveal } from '@/components/motion';
import { SpeculativeDesignSVG, CivicTechSVG, KnowledgeMappingSVG, ResponsibleTechSVG } from '@/components/feature-graphics/FeatureSVGs';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function HomeClient() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Relatronica",
    "description": t('home.tagline', {
      action1: t('home.action1'),
      action2: t('home.action2'),
      action3: t('home.action3')
    }),
    "url": siteUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Relatronica",
      "url": siteUrl
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: t('home.features.speculativeDesign.title'),
      description: t('home.features.speculativeDesign.description'),
      color: 'purple',
      href: '/nexthuman'
    },
    {
      icon: Users,
      title: t('home.features.civicTech.title'),
      description: t('home.features.civicTech.description'),
      color: 'green',
      href: '/progetti'
    },
    {
      icon: Network,
      title: t('home.features.knowledgeMapping.title'),
      description: t('home.features.knowledgeMapping.description'),
      color: 'orange',
      href: '/observatory'
    },
    {
      icon: Shield,
      title: t('home.features.responsibleTech.title'),
      description: t('home.features.responsibleTech.description'),
      color: 'emerald',
      href: '/manifesto'
    }
  ];

  const projects = [
    {
      icon: Network,
      title: t('projects.404human.title'),
      subtitle: t('projects.404human.subtitle'),
      description: t('projects.404human.description'),
      href: 'https://404human.org/',
      color: 'orange'
    },
    {
      icon: Lock,
      title: t('projects.segno.title'),
      subtitle: t('projects.segno.subtitle'),
      description: t('projects.segno.description'),
      href: '/progetti',
      color: 'emerald'
    },
    {
      icon: Gamepad2,
      title: t('projects.neuralforming.title'),
      subtitle: t('projects.neuralforming.subtitle'),
      description: t('projects.neuralforming.description'),
      href: '/progetti',
      color: 'purple'
    }
  ];

  const colorClasses: Record<string, string> = {
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400',
    green: 'bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400',
    orange: 'bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400',
    emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
  };

  return (
    <>
      <StructuredData data={homePageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* === 1. HERO === */}
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
                    {(() => {
                      const tagline = t('home.tagline', {
                        action1: t('home.action1'),
                        action2: t('home.action2'),
                        action3: t('home.action3')
                      });
                      const parts = tagline.split(/(\{action1\}|\{action2\}|\{action3\})/);
                      return parts.map((part, i) => {
                        if (part === '{action1}') return <span key={i} className="font-semibold text-slate-900 dark:text-white">{t('home.action1')}</span>;
                        if (part === '{action2}') return <span key={i} className="font-semibold text-slate-900 dark:text-white">{t('home.action2')}</span>;
                        if (part === '{action3}') return <span key={i} className="font-semibold text-slate-900 dark:text-white">{t('home.action3')}</span>;
                        return <span key={i}>{part}</span>;
                      });
                    })()}
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
            {/* === 2. FEATURES BENTO SHOWCASE (NORDIC TECH PALETTE) === */}
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

            {/* === 4. PROJECTS SHOWCASE (NORDIC BENTO) === */}
            <div className="mb-28">
              <FadeIn className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-wider nordic-terracotta-text">
                  Iniziative ed Esperimenti
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-1 mb-3">
                  {t('home.projectsShowcase.title')}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  {t('home.projectsShowcase.subtitle')}
                </p>
              </FadeIn>

              <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
                {/* Project 1: 404 Human (Featured Flagship Project - col-span-2) */}
                <StaggerItem className="md:col-span-2">
                  <a href={projects[0].href} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="p-3.5 rounded-2xl nordic-terracotta-bg nordic-terracotta-text border border-orange-900/10 dark:border-orange-100/10">
                              <Network className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-semibold tracking-wider nordic-terracotta-text uppercase">
                              {projects[0].subtitle}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                            Ecosistema Esterno <ExternalLink className="w-3 h-3 ml-0.5" />
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:nordic-terracotta-text transition-colors">
                          {projects[0].title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-xl">
                          {projects[0].description}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-sm font-semibold nordic-terracotta-text">
                        <span>Visita 404human.org</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </motion.div>
                  </a>
                </StaggerItem>

                {/* Project 2: SEGNO */}
                <StaggerItem className="md:col-span-1">
                  <Link href={projects[1].href} className="block h-full group">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-3 rounded-xl nordic-sage-bg nordic-sage-text border border-green-900/10 dark:border-green-100/10">
                            <Lock className="w-5 h-5" />
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                        <div className="text-xs font-semibold nordic-sage-text uppercase tracking-wider mb-1">
                          {projects[1].subtitle}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                          {projects[1].title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {projects[1].description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>

                {/* Project 3: Neuralforming */}
                <StaggerItem className="md:col-span-3">
                  <Link href={projects[2].href} className="block h-full group">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                      <div className="flex items-start gap-4 max-w-2xl">
                        <div className="p-3.5 rounded-2xl nordic-moss-bg nordic-moss-text border border-emerald-900/10 dark:border-emerald-100/10 shrink-0">
                          <Gamepad2 className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold nordic-moss-text uppercase tracking-wider mb-1">
                            {projects[2].subtitle}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {projects[2].title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {projects[2].description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold nordic-moss-text shrink-0">
                        <span>{"Scopri l'esperimento"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              </StaggerChildren>

              <FadeIn className="text-center mt-8">
                <Link
                  href="/progetti"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium text-sm"
                >
                  {t('home.projectsShowcase.viewAll')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>

            {/* === 5. RESOURCES (NORDIC HUB) === */}
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



            {/* === 6. MANIFESTO QUOTE === */}
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

            {/* === 7. FINAL CTA === */}
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

          </div>
        </div>
      </DotBoard>
    </>
  );
}
