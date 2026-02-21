'use client';

import Link from 'next/link';
import {
  ArrowRight, Calendar, Sparkles, Users, Network, Shield,
  BookOpen, Radio, Quote, Gamepad2, Lock, ExternalLink
} from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem, TextReveal } from '@/components/motion';
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
      icon: Calendar,
      title: t('projects.nexthuman.title'),
      subtitle: t('projects.nexthuman.subtitle'),
      description: t('projects.nexthuman.description'),
      href: '/nexthuman',
      color: 'blue'
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
            <div className="relative text-center mb-32">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 dark:opacity-20 pointer-events-none">
                <div className="w-full h-full rounded-full animated-gradient bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 blur-[100px]" />
              </div>

              <div className="relative z-10">
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
            </div>

            {/* === 2. FEATURES GRID === */}
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-28" staggerDelay={0.08}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <StaggerItem key={feature.title}>
                    <Link href={feature.href} className="block h-full group">
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${colorClasses[feature.color] || colorClasses.purple}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            {/* === 4. PROJECTS SHOWCASE === */}
            <div className="mb-28">
              <FadeIn className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('home.projectsShowcase.title')}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  {t('home.projectsShowcase.subtitle')}
                </p>
              </FadeIn>

              <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
                {projects.map((project) => {
                  const Icon = project.icon;
                  return (
                    <StaggerItem key={project.title}>
                      <Link href={project.href} className="block h-full group">
                        <motion.div
                          whileHover={{ y: -4 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-xl ${colorClasses[project.color] || colorClasses.purple}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                          </div>
                          <div className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">
                            {project.subtitle}
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>

              <FadeIn className="text-center mt-8">
                <Link
                  href="/progetti"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
                >
                  {t('home.projectsShowcase.viewAll')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>

            {/* === 5. RESOURCES (Observatory + Academy) === */}
            <StaggerChildren className="grid md:grid-cols-2 gap-5 mb-28" staggerDelay={0.12}>
              <StaggerItem>
                <Link href="/observatory" className="group block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-950/30 dark:to-amber-950/30 backdrop-blur-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400">
                        <Radio className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                          {t('home.resources.observatory.badge')}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                      {t('home.resources.observatory.title')}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t('home.resources.observatory.description')}
                    </p>
                  </motion.div>
                </Link>
              </StaggerItem>

              <StaggerItem>
                <Link href="/learn" className="group block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/30 dark:to-indigo-950/30 backdrop-blur-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium">
                          {t('home.resources.academy.badge')}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                      {t('home.resources.academy.title')}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {t('home.resources.academy.description')}
                    </p>
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
