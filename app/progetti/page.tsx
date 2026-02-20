'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Network, Sparkles, Brain, Scale, Users, FileText, Instagram, Linkedin, Shield, BarChart3, X } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { useI18n } from '@/lib/i18n';

export default function ProgettiPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);

  const progetti = [
    {
      id: 'nexthuman',
      title: t('projects.nexthuman.title'),
      subtitle: t('projects.nexthuman.subtitle'),
      description: t('projects.nexthuman.description'),
      tags: ['Speculative Design', 'Knowledge Mapping', 'Civic Tech', 'Data Visualization'],
      href: '/nexthuman',
      icon: Calendar,
      color: 'blue',
      status: null,
    },
    {
      id: 'segno',
      title: t('projects.segno.title'),
      subtitle: t('projects.segno.subtitle'),
      description: t('projects.segno.description'),
      tags: ['Digital Sovereignty', 'Privacy', 'Education', 'Digital Rights'],
      href: 'https://segno.app/',
      icon: Brain,
      color: 'purple',
      status: null,
    },
    {
      id: 'rebica',
      title: t('projects.rebica.title'),
      subtitle: t('projects.rebica.subtitle'),
      description: t('projects.rebica.description'),
      tags: ['Speculative Design', 'Data Visualization', 'Monte Carlo', 'Civic Tech'],
      href: null,
      icon: BarChart3,
      color: 'blue',
      status: null,
    },
    {
      id: 'argo',
      title: t('projects.argo.title'),
      subtitle: t('projects.argo.subtitle'),
      description: t('projects.argo.description'),
      tags: ['End-to-End Encryption', 'Zero Knowledge', 'Privacy by Design', 'Note-taking'],
      href: null,
      icon: FileText,
      color: 'pink',
      status: t('projects.argo.status'),
    },
    {
      id: 'civica',
      title: t('projects.civica.title'),
      subtitle: t('projects.civica.subtitle'),
      description: t('projects.civica.description'),
      tags: ['Civic Tech', 'Speculative Design', 'Education'],
      href: null,
      icon: Scale,
      color: 'orange',
      status: t('projects.civica.status'),
    },
    {
      id: 'neuralforming',
      title: t('projects.neuralforming.title'),
      subtitle: t('projects.neuralforming.subtitle'),
      description: t('projects.neuralforming.description'),
      tags: ['Civic Tech', 'Education', 'AI Ethics', 'Gamification'],
      href: null,
      icon: Users,
      color: 'green',
      status: t('projects.neuralforming.status'),
    },
    {
      id: 'eclipse',
      title: t('projects.eclipse.title'),
      subtitle: t('projects.eclipse.subtitle'),
      description: t('projects.eclipse.description'),
      tags: ['Privacy by Design', 'Data Sovereignty', 'Feminist Tech', 'Health'],
      href: null,
      icon: Shield,
      color: 'red',
      status: t('projects.eclipse.status'),
    },
  ];

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    progetti.forEach((p) => p.tags.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort();
  }, []);

  const getResolvedStatus = (p: typeof progetti[0]) => {
    if (p.status) return p.status;
    if (p.href) return t('projects.statusActive');
    return t('common.comingSoon');
  };

  const allStatuses = useMemo(() => {
    const statusSet = new Set<string>();
    progetti.forEach((p) => statusSet.add(getResolvedStatus(p)));
    return Array.from(statusSet);
  }, []);

  const filteredProgetti = useMemo(() => {
    return progetti.filter((p) => {
      const matchesTag = !activeTag || p.tags.includes(activeTag);
      const matchesStatus = !activeStatus || getResolvedStatus(p) === activeStatus;
      return matchesTag && matchesStatus;
    });
  }, [activeTag, activeStatus]);

  const hasFilters = activeTag !== null || activeStatus !== null;

  const getIconBg = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-50 text-blue-600',
      purple: 'bg-purple-50 text-purple-600',
      green: 'bg-green-50 text-green-600',
      orange: 'bg-orange-50 text-orange-600',
      pink: 'bg-pink-50 text-pink-600',
      red: 'bg-red-50 text-red-600',
    };
    return colors[color] || colors.blue;
  };

  const getStatusStyle = (status: string) => {
    const active = t('projects.statusActive');
    if (status === active) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    return 'bg-amber-100 text-amber-700 border-amber-200';
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

  return (
    <>
      <StructuredData data={progettiPageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">{t('projects.title')}</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </div>

            {/* Filters */}
            <div className="mb-10 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block">
                  {t('projects.filterByTag')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                      className={`
                        px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200
                        ${activeTag === tag
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }
                      `}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block">
                  {t('projects.filterByStatus')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {allStatuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setActiveStatus(activeStatus === status ? null : status)}
                      className={`
                        px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200
                        ${activeStatus === status
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }
                      `}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <button
                  onClick={() => { setActiveTag(null); setActiveStatus(null); }}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <X className="w-3 h-3" />
                  {t('projects.clearFilters')}
                </button>
              )}
            </div>

            {/* Project list */}
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {filteredProgetti.length === 0 && (
                <div className="py-16 text-center text-slate-400 text-sm">
                  {t('projects.noResults')}
                </div>
              )}

              {filteredProgetti.map((progetto) => {
                const Icon = progetto.icon;
                const isComingSoon = !progetto.href;
                const resolvedStatus = getResolvedStatus(progetto);

                const RowContent = (
                  <div className={`
                    flex flex-col sm:flex-row sm:items-center gap-4 py-5 px-4 -mx-4 rounded-xl
                    transition-all duration-200
                    ${isComingSoon
                      ? 'opacity-70'
                      : 'hover:bg-white/80 hover:shadow-sm cursor-pointer'
                    }
                  `}>
                    {/* Left: icon + title block */}
                    <div className="flex items-start gap-3 sm:w-2/5 shrink-0">
                      <div className={`p-2 rounded-lg shrink-0 ${getIconBg(progetto.color)}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-slate-900 leading-tight">{progetto.title}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{progetto.subtitle}</p>
                      </div>
                    </div>

                    {/* Center: description + tags */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {progetto.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {progetto.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`
                              px-2 py-0.5 text-[11px] rounded-full font-medium
                              ${activeTag === tag
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-100 text-slate-500'
                              }
                            `}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: status + arrow */}
                    <div className="flex items-center gap-3 sm:shrink-0">
                      <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap ${getStatusStyle(resolvedStatus)}`}>
                        {resolvedStatus}
                      </span>
                      {!isComingSoon && (
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </div>
                  </div>
                );

                if (isComingSoon) {
                  return <div key={progetto.id}>{RowContent}</div>;
                }

                return (
                  <Link key={progetto.id} href={progetto.href!} className="block">
                    {RowContent}
                  </Link>
                );
              })}
            </div>

            {/* Contact section */}
            <div className="mt-20 text-center">
              <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-10 shadow-sm max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">{t('projects.contact.title')}</h2>
                <p className="text-slate-600 mb-6 text-[15px] leading-relaxed">
                  {t('projects.contact.description')}
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  {t('projects.contact.cta')}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.instagram.com/relatronica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/relatronica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:bg-white hover:shadow-md transition-all duration-200 font-medium text-sm"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DotBoard>
    </>
  );
}
