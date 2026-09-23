'use client';

import Link from 'next/link';
import { ArrowRight, Network, Map, Activity, ExternalLink } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

export function ProjectsBento() {
  const { t } = useI18n();

  const projects = [
    {
      icon: Network,
      title: t('projects.404human.title'),
      subtitle: t('projects.404human.subtitle'),
      description: t('projects.404human.description'),
      href: 'https://404human.org/',
      external: true,
      color: 'orange',
      cta: 'Visita 404human.org',
    },
    {
      icon: Activity,
      title: t('projects.segno.title'),
      subtitle: t('projects.segno.subtitle'),
      description: t('projects.segno.description'),
      href: 'https://segno.app/',
      external: true,
      color: 'emerald',
      cta: 'Visita segno.app',
    },
    {
      icon: Map,
      title: t('projects.substrato.title'),
      subtitle: t('projects.substrato.subtitle'),
      description: t('projects.substrato.description'),
      href: 'https://substrato.eu/',
      external: true,
      color: 'purple',
      cta: 'Visita substrato.eu',
    },
  ];

  return (
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
                <span>{projects[0].cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          </a>
        </StaggerItem>

        {/* Project 2: Segno */}
        <StaggerItem className="md:col-span-1">
          <a href={projects[1].href} target="_blank" rel="noopener noreferrer" className="block h-full group">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl nordic-sage-bg nordic-sage-text border border-green-900/10 dark:border-green-100/10">
                    <Activity className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-all" />
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
          </a>
        </StaggerItem>

        {/* Project 3: Substrato */}
        <StaggerItem className="md:col-span-3">
          <a href={projects[2].href} target="_blank" rel="noopener noreferrer" className="block h-full group">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bento-card bento-card-hover relative h-full p-8 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="p-3.5 rounded-2xl nordic-moss-bg nordic-moss-text border border-emerald-900/10 dark:border-emerald-100/10 shrink-0">
                  <Map className="w-6 h-6" />
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
                <span>{projects[2].cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          </a>
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
  );
}
