'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Network, Activity, Scale, Users, FileText, Instagram, Linkedin, Shield, BarChart3, Cpu, Map, X, Github } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn } from '@/components/motion';
import { useI18n } from '@/lib/i18n';

export default function ProgettiPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);

  const progetti = useMemo(() => [
    { id: 'nexthuman', title: t('projects.nexthuman.title'), subtitle: t('projects.nexthuman.subtitle'), description: t('projects.nexthuman.description'), tags: ['Speculative Design', 'Knowledge Mapping', 'Civic Tech', 'Data Visualization'], href: '/nexthuman', github: null, icon: Calendar, color: 'blue', status: null },
    { id: 'segno', title: t('projects.segno.title'), subtitle: t('projects.segno.subtitle'), description: t('projects.segno.description'), tags: ['Civic Tech', 'Transparency', 'AI Policy', 'Timeline'], href: 'https://segno.app/', github: 'https://github.com/Relatronica/Segno', icon: Activity, color: 'purple', status: null },
    { id: 'substrato', title: t('projects.substrato.title'), subtitle: t('projects.substrato.subtitle'), description: t('projects.substrato.description'), tags: ['Civic Tech', 'Knowledge Mapping', 'Open Data', 'Infrastructure'], href: 'https://substrato.eu/', github: 'https://github.com/Relatronica/TechMap', icon: Map, color: 'green', status: null },
    { id: '404human', title: t('projects.404human.title'), subtitle: t('projects.404human.subtitle'), description: t('projects.404human.description'), tags: ['Speculative Design', 'Civic Tech', 'Simulation', 'Social Systems'], href: 'https://404human.org/', github: 'https://github.com/giuseppeaceto/404Human', icon: Network, color: 'orange', status: null },
    { id: 'rebica', title: t('projects.rebica.title'), subtitle: t('projects.rebica.subtitle'), description: t('projects.rebica.description'), tags: ['Speculative Design', 'Data Visualization', 'Monte Carlo', 'Civic Tech'], href: null, github: null, icon: BarChart3, color: 'blue', status: null },
    { id: 'argo', title: t('projects.argo.title'), subtitle: t('projects.argo.subtitle'), description: t('projects.argo.description'), tags: ['End-to-End Encryption', 'Zero Knowledge', 'Privacy by Design', 'Note-taking'], href: null, github: 'https://github.com/Relatronica/Project-Argo', icon: FileText, color: 'pink', status: t('projects.argo.status') },
    { id: 'civica', title: t('projects.civica.title'), subtitle: t('projects.civica.subtitle'), description: t('projects.civica.description'), tags: ['Civic Tech', 'Speculative Design', 'Education'], href: null, github: null, icon: Scale, color: 'orange', status: t('projects.civica.status') },
    { id: 'neuralforming', title: t('projects.neuralforming.title'), subtitle: t('projects.neuralforming.subtitle'), description: t('projects.neuralforming.description'), tags: ['Civic Tech', 'Education', 'AI Ethics', 'Gamification'], href: 'https://neuralforming.org/', github: 'https://github.com/Relatronica/Neuralforming', icon: Users, color: 'green', status: null },
    { id: 'eclipse', title: t('projects.eclipse.title'), subtitle: t('projects.eclipse.subtitle'), description: t('projects.eclipse.description'), tags: ['Privacy by Design', 'Data Sovereignty', 'Feminist Tech', 'Health'], href: null, github: 'https://github.com/Relatronica/eclipse', icon: Shield, color: 'red', status: t('projects.eclipse.status') },
    { id: 'mauss', title: t('projects.mauss.title'), subtitle: t('projects.mauss.subtitle'), description: t('projects.mauss.description'), tags: ['Volunteer Computing', 'Open Science', 'Research Infrastructure', 'Civic Tech'], href: null, github: null, icon: Cpu, color: 'green', status: t('projects.mauss.status') },
  ], [t]);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    progetti.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, [progetti]);

  const getResolvedStatus = useCallback((p: typeof progetti[0]) => {
    if (p.status) return p.status;
    if (p.href) return t('projects.statusActive');
    return t('common.comingSoon');
  }, [t]);

  const allStatuses = useMemo(() => {
    const statusSet = new Set<string>();
    progetti.forEach((p) => statusSet.add(getResolvedStatus(p)));
    return Array.from(statusSet);
  }, [progetti, getResolvedStatus]);

  const filteredProgetti = useMemo(() => {
    return progetti.filter((p) => {
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesStatus = !activeStatus || getResolvedStatus(p) === activeStatus;
      return matchesTag && matchesStatus;
    });
  }, [progetti, activeTag, activeStatus, getResolvedStatus]);

  const hasFilters = activeTag !== null || activeStatus !== null;

  const getIconBg = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
      purple: 'bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400',
      green: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
      orange: 'bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400',
      pink: 'bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400',
      red: 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400',
    };
    return colors[color] || colors.blue;
  };

  const getStatusStyle = (status: string) => {
    const active = t('projects.statusActive');
    if (status === active) {
      return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 ring-1 ring-inset ring-emerald-600/15 dark:ring-emerald-400/20';
    }
    return 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 ring-1 ring-inset ring-slate-900/5 dark:ring-white/10';
  };

  const progettiPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Progetti - Relatronica",
    "description": "Esplorazioni al confine tra design speculativo, civic tech e knowledge mapping.",
    "url": `${siteUrl}/progetti`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": progetti.map((progetto, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": progetto.title,
          "description": progetto.description,
          "url": progetto.href ? (progetto.href.startsWith('http') ? progetto.href : `${siteUrl}${progetto.href}`) : undefined,
        }
      }))
    }
  };

  const filterChipClass = (active: boolean) =>
    `px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
      active
        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white'
        : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
    }`;

  return (
    <>
      <StructuredData data={progettiPageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="mb-14">
              <h1 className="text-5xl sm:text-6xl font-bold mb-5 text-slate-900 dark:text-white tracking-tight">
                {t('projects.title')}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mb-12 space-y-5">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2.5 block">
                    {t('projects.filterByTag')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        className={filterChipClass(activeTag === tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2.5 block">
                    {t('projects.filterByStatus')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {allStatuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => setActiveStatus(activeStatus === status ? null : status)}
                        className={filterChipClass(activeStatus === status)}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                {hasFilters && (
                  <button
                    onClick={() => { setActiveTag(null); setActiveStatus(null); }}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  >
                    <X className="w-3 h-3" />
                    {t('projects.clearFilters')}
                  </button>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="border-t border-slate-200 dark:border-slate-800">
                {filteredProgetti.length === 0 && (
                  <div className="py-16 text-center text-slate-400 text-sm">
                    {t('projects.noResults')}
                  </div>
                )}

                {filteredProgetti.map((progetto) => {
                  const Icon = progetto.icon;
                  const resolvedStatus = getResolvedStatus(progetto);
                  const isExternal = Boolean(progetto.href?.startsWith('http'));
                  const isActive = resolvedStatus === t('projects.statusActive');

                  return (
                    <article
                      key={progetto.id}
                      className={`group border-b border-slate-200 dark:border-slate-800 py-8 ${
                        !progetto.href && !progetto.github ? 'opacity-75' : ''
                      }`}
                    >
                      <div className="flex gap-4 sm:gap-5">
                        <div className={`mt-0.5 p-2.5 rounded-xl shrink-0 ${getIconBg(progetto.color)}`}>
                          <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1.5">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                              {progetto.title}
                            </h2>
                            <span
                              className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md ${getStatusStyle(resolvedStatus)}`}
                            >
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" aria-hidden />
                              )}
                              {resolvedStatus}
                            </span>
                          </div>

                          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
                            {progetto.subtitle}
                          </p>

                          <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4 max-w-2xl">
                            {progetto.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {progetto.tags.map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                                className={`px-2 py-0.5 text-[11px] rounded-md font-medium transition-colors
                                  ${activeTag === tag
                                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                    : 'text-slate-500 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 bg-slate-50 dark:bg-slate-900/60'
                                  }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>

                          {(progetto.href || progetto.github) && (
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                              {progetto.href && (
                                isExternal ? (
                                  <a
                                    href={progetto.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
                                  >
                                    {t('projects.visitProject')}
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </a>
                                ) : (
                                  <Link
                                    href={progetto.href}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white hover:opacity-70 transition-opacity"
                                  >
                                    {t('projects.visitProject')}
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </Link>
                                )
                              )}
                              {progetto.github && (
                                <a
                                  href={progetto.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                  <Github className="w-3.5 h-3.5" />
                                  {t('projects.github')}
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.35} className="mt-20 text-center">
              <div className="border-t border-slate-200 dark:border-slate-800 pt-12 max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{t('projects.contact.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-5 text-[15px] leading-relaxed">
                  {t('projects.contact.description')}
                </p>
                <p className="text-sm text-slate-500 mb-5">{t('projects.contact.cta')}</p>
                <div className="flex justify-center gap-3">
                  <a href="https://www.instagram.com/relatronica" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium text-sm"
                    aria-label="Follow us on Instagram">
                    <Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/company/relatronica/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium text-sm"
                    aria-label="Follow us on LinkedIn">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </DotBoard>
    </>
  );
}
