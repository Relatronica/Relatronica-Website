'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { ArrowUpRight, Calendar, Network, Activity, Scale, Users, FileText, Instagram, Linkedin, Shield, Compass, Cpu, Map, X, Github, UserCheck, Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { useI18n } from '@/lib/i18n';

type ThemeGlyphName = 'civic' | 'speculative' | 'mapping' | 'governance' | 'privacy' | 'education';

const glyphProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

function ThemeGlyph({ name, className }: { name: ThemeGlyphName; className?: string }) {
  switch (name) {
    case 'civic':
      return (
        <svg {...glyphProps} className={className}>
          <circle cx="12" cy="6" r="2.4" />
          <circle cx="5.5" cy="18" r="2.4" />
          <circle cx="18.5" cy="18" r="2.4" />
          <path d="M12 6 6.5 15.8M12 6l5.5 9.8M7.9 18h8.2" />
        </svg>
      );
    case 'speculative':
      return (
        <svg {...glyphProps} className={className}>
          <path d="M3 19.5h18" />
          <circle cx="12" cy="11" r="5" strokeDasharray="2.5 3" />
          <path d="M12 2.5v2M4.6 4.6l1.5 1.5M19.4 4.6l-1.5 1.5" />
        </svg>
      );
    case 'mapping':
      return (
        <svg {...glyphProps} className={className}>
          <circle cx="6" cy="6" r="1.9" />
          <circle cx="18" cy="6" r="1.9" />
          <circle cx="6" cy="18" r="1.9" />
          <circle cx="18" cy="18" r="1.9" />
          <path d="M8 6h8M6 8v8M18 8v8M8 18h8" />
        </svg>
      );
    case 'governance':
      return (
        <svg {...glyphProps} className={className}>
          <path d="M12 3.2 5.2 5.8v5.1c0 4.1 2.9 7.6 6.8 9.1 3.9-1.5 6.8-5 6.8-9.1V5.8z" />
          <path d="M9.2 11.8l2 2 3.6-3.9" />
        </svg>
      );
    case 'privacy':
      return (
        <svg {...glyphProps} className={className}>
          <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
          <path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5" />
          <circle cx="12" cy="15.2" r="1.1" />
        </svg>
      );
    case 'education':
      return (
        <svg {...glyphProps} className={className}>
          <path d="M12 6.6C10.6 5.4 8.6 5 5.5 5v11.6c3.1 0 5.2.4 6.5 1.6 1.3-1.2 3.4-1.6 6.5-1.6V5c-3.1 0-5.1.4-6.5 1.6z" />
          <path d="M12 6.6v11.6" />
        </svg>
      );
  }
}

const MACRO_THEMES: {
  key: string;
  tag: string;
  glyph: ThemeGlyphName;
  bg: string;
  text: string;
}[] = [
  { key: 'civic-tech', tag: 'Civic Tech', glyph: 'civic', bg: 'nordic-sage-bg', text: 'nordic-sage-text' },
  { key: 'speculative-design', tag: 'Speculative Design', glyph: 'speculative', bg: 'nordic-terracotta-bg', text: 'nordic-terracotta-text' },
  { key: 'knowledge-mapping', tag: 'Knowledge Mapping', glyph: 'mapping', bg: 'nordic-moss-bg', text: 'nordic-moss-text' },
  { key: 'ai-governance', tag: 'AI Governance', glyph: 'governance', bg: 'nordic-slate-bg', text: 'nordic-slate-text' },
  { key: 'privacy-by-design', tag: 'Privacy by Design', glyph: 'privacy', bg: 'nordic-sage-bg', text: 'nordic-sage-text' },
  { key: 'education', tag: 'Education', glyph: 'education', bg: 'nordic-terracotta-bg', text: 'nordic-terracotta-text' },
];

export default function ProgettiPage() {
  const { t } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'all' | 'active' | 'upcoming'>('all');
  const [isRailOpen, setIsRailOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>(MACRO_THEMES[0].key);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const progetti = useMemo(() => [
    { id: 'nexthuman', title: t('projects.nexthuman.title'), subtitle: t('projects.nexthuman.subtitle'), description: t('projects.nexthuman.description'), tags: ['Speculative Design', 'Knowledge Mapping', 'Civic Tech', 'Data Visualization'], href: '/nexthuman', github: null, icon: Calendar, status: null },
    { id: 'segno', title: t('projects.segno.title'), subtitle: t('projects.segno.subtitle'), description: t('projects.segno.description'), tags: ['Civic Tech', 'Knowledge Mapping', 'Transparency', 'AI Policy', 'Timeline'], href: 'https://segno.app/', github: 'https://github.com/Relatronica/Segno', icon: Activity, status: null },
    { id: 'substrato', title: t('projects.substrato.title'), subtitle: t('projects.substrato.subtitle'), description: t('projects.substrato.description'), tags: ['Civic Tech', 'Knowledge Mapping', 'Open Data', 'Infrastructure'], href: 'https://substrato.eu/', github: 'https://github.com/Relatronica/TechMap', icon: Map, status: null },
    { id: '404human', title: t('projects.404human.title'), subtitle: t('projects.404human.subtitle'), description: t('projects.404human.description'), tags: ['Speculative Design', 'Civic Tech', 'Simulation', 'Social Systems'], href: 'https://404human.org/', github: 'https://github.com/giuseppeaceto/404Human', icon: Network, status: null },
    { id: 'weltform', title: t('projects.weltform.title'), subtitle: t('projects.weltform.subtitle'), description: t('projects.weltform.description'), tags: ['Decision Intelligence', 'Scenario Planning', 'Simulation', 'AI Governance'], href: 'https://www.weltform.com', github: null, icon: Compass, status: null },
    { id: 'dubitor', title: t('projects.dubitor.title'), subtitle: t('projects.dubitor.subtitle'), description: t('projects.dubitor.description'), tags: ['Red Teaming', 'Human-in-the-loop', 'AI Ethics', 'AI Governance'], href: 'https://www.dubitor.com/', github: null, icon: UserCheck, status: null },
    { id: 'argo', title: t('projects.argo.title'), subtitle: t('projects.argo.subtitle'), description: t('projects.argo.description'), tags: ['End-to-End Encryption', 'Zero Knowledge', 'Privacy by Design', 'Note-taking'], href: null, github: 'https://github.com/Relatronica/Project-Argo', icon: FileText, status: t('projects.argo.status') },
    { id: 'civica', title: t('projects.civica.title'), subtitle: t('projects.civica.subtitle'), description: t('projects.civica.description'), tags: ['Civic Tech', 'Speculative Design', 'Education'], href: null, github: null, icon: Scale, status: t('projects.civica.status') },
    { id: 'neuralforming', title: t('projects.neuralforming.title'), subtitle: t('projects.neuralforming.subtitle'), description: t('projects.neuralforming.description'), tags: ['Civic Tech', 'Education', 'AI Ethics', 'Gamification'], href: 'https://neuralforming.org/', github: 'https://github.com/Relatronica/Neuralforming', icon: Users, status: null },
    { id: 'eclipse', title: t('projects.eclipse.title'), subtitle: t('projects.eclipse.subtitle'), description: t('projects.eclipse.description'), tags: ['Privacy by Design', 'Data Sovereignty', 'Feminist Tech', 'Health'], href: null, github: 'https://github.com/Relatronica/eclipse', icon: Shield, status: t('projects.eclipse.status') },
    { id: 'mauss', title: t('projects.mauss.title'), subtitle: t('projects.mauss.subtitle'), description: t('projects.mauss.description'), tags: ['Volunteer Computing', 'Open Science', 'Research Infrastructure', 'Civic Tech'], href: null, github: null, icon: Cpu, status: t('projects.mauss.status') },
  ], [t]);

  const getResolvedStatus = useCallback((p: typeof progetti[0]) => {
    if (p.status) return p.status;
    if (p.href) return t('projects.statusActive');
    return t('common.comingSoon');
  }, [t]);

  const filtered = useMemo(() => {
    const activeLabel = t('projects.statusActive');
    const q = query.trim().toLowerCase();
    return progetti.filter((p) => {
      const resolved = getResolvedStatus(p);
      if (status === 'active' && resolved !== activeLabel) return false;
      if (status === 'upcoming' && resolved === activeLabel) return false;
      if (q) {
        const haystack = `${p.title} ${p.subtitle} ${p.description} ${p.tags.join(' ')}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [progetti, status, query, getResolvedStatus, t]);

  const sections = useMemo(
    () =>
      MACRO_THEMES
        .map((theme) => ({ ...theme, items: filtered.filter((p) => p.tags.includes(theme.tag)) }))
        .filter((theme) => theme.items.length > 0),
    [filtered]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const key = visible[0]?.target.getAttribute('data-theme-key');
        if (key) setActiveKey(key);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );
    sections.forEach((theme) => {
      const el = sectionRefs.current[theme.key];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (key: string) => {
    sectionRefs.current[key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const hasFilters = status !== 'all' || query.trim().length > 0;

  const clearFilters = () => {
    setStatus('all');
    setQuery('');
  };

  const getStatusStyle = (value: string) => {
    if (value === t('projects.statusActive')) {
      return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 ring-1 ring-inset ring-emerald-600/15 dark:ring-emerald-400/20';
    }
    return 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 ring-1 ring-inset ring-slate-900/5 dark:ring-white/10';
  };

  const statusOptions = [
    { value: 'all' as const, label: t('projects.filterAll') },
    { value: 'active' as const, label: t('projects.filterActive') },
    { value: 'upcoming' as const, label: t('projects.filterUpcoming') },
  ];

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

  const railContent = (
    <div className="space-y-7">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('projects.searchPlaceholder')}
          className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-white/10"
        />
      </div>

      <div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2.5 block">
          {t('projects.statusLabel')}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setStatus(opt.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                status === opt.value
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white'
                  : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <nav>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2.5 block">
          {t('projects.areas')}
        </span>
        <ul className="space-y-1">
          {sections.map((theme) => {
            const isActive = activeKey === theme.key;
            return (
              <li key={theme.key}>
                <button
                  type="button"
                  onClick={() => scrollToSection(theme.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                    isActive
                      ? `${theme.bg} ${theme.text} font-semibold`
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <ThemeGlyph name={theme.glyph} className="w-[18px] h-[18px] shrink-0" />
                  <span className="truncate">{theme.tag}</span>
                  <span className="ml-auto text-[11px] tabular-nums opacity-70">{theme.items.length}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-3 h-3" />
          {t('projects.clearFilters')}
        </button>
      )}
    </div>
  );

  return (
    <>
      <StructuredData data={progettiPageSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="mb-14 max-w-3xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] nordic-terracotta-text">
                {t('projects.eyebrow')}
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold mt-3 mb-5 text-slate-900 dark:text-white tracking-tight">
                {t('projects.title')}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </FadeIn>

            {/* Mobile: rail collassabile */}
            <div className="lg:hidden mb-8">
              <button
                type="button"
                onClick={() => setIsRailOpen((prev) => !prev)}
                aria-expanded={isRailOpen}
                className="flex w-full items-center justify-between px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <span className="inline-flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  {t('projects.areas')}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isRailOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isRailOpen && <div className="mt-4">{railContent}</div>}
            </div>

            <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-12">
              {/* Desktop: rail verticale scrollabile */}
              <aside className="hidden lg:block">
                <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-1">
                  {railContent}
                </div>
              </aside>

              {/* Sezioni tematiche */}
              <div>
                {sections.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 text-sm">
                    {t('projects.noResults')}
                  </div>
                ) : (
                  <div className="space-y-16">
                    {sections.map((theme) => (
                      <section
                        key={theme.key}
                        ref={(el) => { sectionRefs.current[theme.key] = el; }}
                        data-theme-key={theme.key}
                        className="scroll-mt-32"
                      >
                        <div className="mb-6 flex items-center gap-3">
                          <span className={`inline-flex p-2.5 rounded-xl ${theme.bg} ${theme.text}`}>
                            <ThemeGlyph name={theme.glyph} className="w-5 h-5" />
                          </span>
                          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                            {theme.tag}
                          </h2>
                        </div>

                        <StaggerChildren
                          className={`grid gap-4 ${
                            theme.items.length <= 2
                              ? 'grid-cols-1 sm:grid-cols-2'
                              : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                          }`}
                        >
                          {theme.items.map((progetto) => {
                            const Icon = progetto.icon;
                            const resolvedStatus = getResolvedStatus(progetto);
                            const isExternal = Boolean(progetto.href?.startsWith('http'));

                            return (
                              <StaggerItem key={progetto.id} className="h-full">
                                <article className="bento-card bento-card-hover flex h-full flex-col p-6">
                                  <div className="flex items-start justify-between gap-3 mb-5">
                                    <span className={`inline-flex p-3 rounded-xl ${theme.bg} ${theme.text}`}>
                                      <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                                    </span>
                                    <span
                                      className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${getStatusStyle(resolvedStatus)}`}
                                    >
                                      {resolvedStatus}
                                    </span>
                                  </div>

                                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                                    {progetto.title}
                                  </h3>
                                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mb-2">
                                    {progetto.subtitle}
                                  </p>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">
                                    {progetto.description}
                                  </p>

                                  <div className="flex flex-wrap gap-1.5 mt-4">
                                    {progetto.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className="px-2 py-0.5 text-[11px] rounded-md font-medium text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-900/60"
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>

                                  {(progetto.href || progetto.github) && (
                                    <div className="mt-auto pt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
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
                                </article>
                              </StaggerItem>
                            );
                          })}
                        </StaggerChildren>
                      </section>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <FadeIn delay={0.1} className="mt-20">
              <section className="bento-card p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{t('projects.contact.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-2 text-[15px] leading-relaxed max-w-2xl">
                  {t('projects.contact.description')}
                </p>
                <p className="text-sm text-slate-500">{t('projects.contact.cta')}</p>
                <div className="flex flex-wrap gap-3 mt-6">
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
              </section>
            </FadeIn>
          </div>
        </div>
      </DotBoard>
    </>
  );
}
