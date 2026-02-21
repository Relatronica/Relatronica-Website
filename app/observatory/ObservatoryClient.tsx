'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import {
  Activity,
  ExternalLink,
  RefreshCw,
  Search,
  Filter,
  Clock,
  Newspaper,
  Globe2,
  Brain,
  Scale,
  Shield,
  Users,
  X,
  ChevronDown,
  ChevronRight,
  Loader2,
  AlertCircle,
  Rss,
  Zap,
  TrendingUp,
  ArrowRight,
  Link2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/motion';
import { motion } from 'framer-motion';
import {
  PulseArticle,
  PulseData,
  DeadlineSignal,
  ObservatoryTheme,
} from '@/types/observatory';

const THEME_CONFIG: Record<
  ObservatoryTheme,
  { icon: typeof Brain; colorClass: string; bgClass: string; borderClass: string }
> = {
  ai: { icon: Brain, colorClass: 'text-violet-600 dark:text-violet-400', bgClass: 'bg-violet-50 dark:bg-violet-950/50', borderClass: 'border-violet-200 dark:border-violet-800' },
  ethics: { icon: Scale, colorClass: 'text-rose-600 dark:text-rose-400', bgClass: 'bg-rose-50 dark:bg-rose-950/50', borderClass: 'border-rose-200 dark:border-rose-800' },
  policy: { icon: Shield, colorClass: 'text-blue-600 dark:text-blue-400', bgClass: 'bg-blue-50 dark:bg-blue-950/50', borderClass: 'border-blue-200 dark:border-blue-800' },
  'digital-sovereignty': { icon: Globe2, colorClass: 'text-amber-600 dark:text-amber-400', bgClass: 'bg-amber-50 dark:bg-amber-950/50', borderClass: 'border-amber-200 dark:border-amber-800' },
  'civic-tech': { icon: Users, colorClass: 'text-sky-600 dark:text-sky-400', bgClass: 'bg-sky-50 dark:bg-sky-950/50', borderClass: 'border-sky-200 dark:border-sky-800' },
};

const PROBABILITY_COLORS: Record<string, string> = {
  low: 'text-slate-500',
  medium: 'text-amber-500',
  high: 'text-orange-500',
  'very-high': 'text-red-500',
};

const PROBABILITY_BG: Record<string, string> = {
  low: 'bg-slate-100 dark:bg-slate-800',
  medium: 'bg-amber-50 dark:bg-amber-950/50',
  high: 'bg-orange-50 dark:bg-orange-950/50',
  'very-high': 'bg-red-50 dark:bg-red-950/50',
};

function formatRelativeTime(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return locale === 'it' ? 'Recente' : 'Recent';

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  if (diffMs < 60000) return locale === 'it' ? 'Ora' : 'Now';

  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (locale === 'it') {
    if (diffMins < 60) return `${diffMins} min fa`;
    if (diffHours < 24) return `${diffHours}h fa`;
    if (diffDays < 7) return `${diffDays}g fa`;
    return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
  }
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
}

function formatDeadlineYear(dateStr: string): string {
  return new Date(dateStr).getFullYear().toString();
}

function PulseIcon({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <Activity className="w-5 h-5" />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-current opacity-40"
        animate={{ scale: [1, 2], opacity: [0.4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
      />
    </div>
  );
}

function SignalCard({
  signal,
  locale,
  isActive,
  onClick,
  translatedTitle,
}: {
  signal: DeadlineSignal;
  locale: string;
  isActive: boolean;
  onClick: () => void;
  translatedTitle: string;
}) {
  const probColor = PROBABILITY_COLORS[signal.probability] || 'text-slate-500';
  const probBg = PROBABILITY_BG[signal.probability] || 'bg-slate-100';

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex-shrink-0 w-64 rounded-2xl border p-4 text-left transition-all duration-200 group',
        isActive
          ? 'border-blue-300 dark:border-blue-700 bg-blue-50/80 dark:bg-blue-950/50 shadow-md ring-1 ring-blue-200 dark:ring-blue-800'
          : 'border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm'
      )}
    >
      <div className="flex items-center justify-between mb-2.5">
        <span className={cn(
          'inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full',
          probBg, probColor
        )}>
          <Zap className="w-3 h-3" />
          {signal.articleCount}
        </span>
        <span className="text-[11px] text-slate-400 font-medium">
          {formatDeadlineYear(signal.date)}
        </span>
      </div>

      <h4 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {translatedTitle}
      </h4>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-16 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <motion.div
              className={cn('h-full rounded-full', signal.probabilityValue >= 70 ? 'bg-orange-400' : signal.probabilityValue >= 50 ? 'bg-amber-400' : 'bg-slate-400')}
              initial={{ width: 0 }}
              animate={{ width: `${signal.probabilityValue}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <span className="text-[11px] text-slate-400">{signal.probabilityValue}%</span>
        </div>
        <ChevronRight className={cn(
          'w-3.5 h-3.5 transition-transform',
          isActive ? 'text-blue-500 translate-x-0.5' : 'text-slate-300'
        )} />
      </div>
    </button>
  );
}

function ArticleCard({ article, locale, onDeadlineClick, translateDeadline }: {
  article: PulseArticle;
  locale: string;
  onDeadlineClick: (id: string) => void;
  translateDeadline: (id: string, fallback: string) => string;
}) {
  const primaryTheme = article.themes[0];
  const config = THEME_CONFIG[primaryTheme];
  const IconComponent = config?.icon || Newspaper;
  const [imgError, setImgError] = useState(false);
  const hasImage = article.imageUrl && !imgError;
  const hasLinks = article.linkedDeadlines.length > 0;

  return (
    <div className={cn(
      'group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 overflow-hidden flex flex-col',
      hasLinks && 'ring-1 ring-blue-100/50 dark:ring-blue-900/30'
    )}>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1"
      >
        {hasImage && (
          <div className="relative w-full h-40 bg-slate-100 dark:bg-slate-800 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.imageUrl}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
              <IconComponent className={cn('w-3 h-3', config?.colorClass || 'text-slate-600')} />
              <span className="text-[10px] font-semibold text-slate-700">{article.source}</span>
            </div>
          </div>
        )}

        <div className="p-5">
          <div className="flex items-start gap-4">
            {!hasImage && (
              <div className={cn('p-2.5 rounded-xl flex-shrink-0', config?.bgClass || 'bg-slate-50')}>
                <IconComponent className={cn('w-5 h-5', config?.colorClass || 'text-slate-600')} />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                {!hasImage && (
                  <>
                    <span className="text-xs font-medium text-slate-500 truncate">{article.source}</span>
                    <span className="text-slate-300">·</span>
                  </>
                )}
                <span className="text-xs text-slate-400 flex items-center gap-1 flex-shrink-0">
                  <Clock className="w-3 h-3" />
                  {formatRelativeTime(article.pubDate, locale)}
                </span>
              </div>

              <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {article.title}
              </h3>

              {article.excerpt && (
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
              )}

              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {article.themes.map((theme) => {
                    const themeConfig = THEME_CONFIG[theme];
                    return (
                      <span
                        key={theme}
                        className={cn(
                          'inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border',
                          themeConfig?.bgClass || 'bg-slate-50',
                          themeConfig?.colorClass || 'text-slate-600',
                          themeConfig?.borderClass || 'border-slate-200'
                        )}
                      >
                        {theme === 'ai' && (locale === 'it' ? 'IA' : 'AI')}
                        {theme === 'ethics' && (locale === 'it' ? 'Etica' : 'Ethics')}
                        {theme === 'policy' && 'Policy'}
                        {theme === 'digital-sovereignty' && (locale === 'it' ? 'Sovranità Digitale' : 'Digital Sovereignty')}
                        {theme === 'civic-tech' && 'Civic Tech'}
                      </span>
                    );
                  })}
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </a>

      {hasLinks && (
        <div className="border-t border-slate-100 dark:border-slate-800 px-5 py-3 bg-slate-50/50 dark:bg-slate-950/30">
          <div className="flex items-center gap-1.5 mb-2">
            <Link2 className="w-3 h-3 text-blue-500" />
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {locale === 'it' ? 'Scenari collegati' : 'Linked scenarios'}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {article.linkedDeadlines.map((ld) => (
              <button
                key={ld.id}
                onClick={(e) => {
                  e.preventDefault();
                  onDeadlineClick(ld.id);
                }}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <span className={cn(
                  'w-1.5 h-1.5 rounded-full flex-shrink-0',
                  ld.probabilityValue >= 70 ? 'bg-orange-400' : ld.probabilityValue >= 50 ? 'bg-amber-400' : 'bg-slate-400'
                )} />
                <span className="truncate max-w-[140px]">{translateDeadline(ld.id, ld.title)}</span>
                <span className="text-slate-400 flex-shrink-0">{formatDeadlineYear(ld.date)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ObservatoryClient() {
  const { t, locale } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';
  const signalBoardRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<PulseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const [activeThemes, setActiveThemes] = useState<ObservatoryTheme[]>([]);
  const [activeDeadline, setActiveDeadline] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);

  const fetchData = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/observatory');
      if (!res.ok) throw new Error('Failed to fetch');
      const result: PulseData = await res.json();
      setData(result);
    } catch {
      setError(locale === 'it'
        ? 'Impossibile caricare i dati. Riprova più tardi.'
        : 'Unable to load data. Please try again later.'
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [locale]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredArticles = useMemo(() => {
    if (!data) return [];
    let articles = data.articles;

    if (activeDeadline) {
      articles = articles.filter((a) =>
        a.linkedDeadlines.some((ld) => ld.id === activeDeadline)
      );
    }

    if (activeThemes.length > 0) {
      articles = articles.filter((a) =>
        a.themes.some((t) => activeThemes.includes(t))
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.source.toLowerCase().includes(q)
      );
    }

    return articles;
  }, [data, activeThemes, activeDeadline, searchQuery]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const toggleTheme = (theme: ObservatoryTheme) => {
    setActiveThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
    setVisibleCount(20);
  };

  const handleDeadlineClick = (deadlineId: string) => {
    setActiveDeadline((prev) => prev === deadlineId ? null : deadlineId);
    setVisibleCount(20);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setActiveThemes([]);
    setActiveDeadline(null);
    setSearchQuery('');
    setVisibleCount(20);
  };

  const themeEntries = Object.entries(THEME_CONFIG) as [ObservatoryTheme, typeof THEME_CONFIG[ObservatoryTheme]][];
  const hasActiveFilters = activeThemes.length > 0 || activeDeadline || searchQuery.trim();

  const activeSignal = data?.signals.find((s) => s.id === activeDeadline);

  const deadlineTitle = useCallback((id: string, fallback: string) => {
    const translated = t(`deadlines.${id}.title`);
    return translated !== `deadlines.${id}.title` ? translated : fallback;
  }, [t]);

  const pulseSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": locale === 'it' ? "Pulse - Relatronica" : "Pulse - Relatronica",
    "description": locale === 'it'
      ? "Notizie in tempo reale collegate agli scenari futuri di NextHuman. Il battito del futuro, oggi."
      : "Real-time news connected to NextHuman future scenarios. The heartbeat of the future, today.",
    "url": `${siteUrl}/observatory`,
    "mainEntity": {
      "@type": "DataFeed",
      "name": "Relatronica Pulse Feed",
      "dataFeedElement": visibleArticles.slice(0, 5).map((a) => ({
        "@type": "DataFeedItem",
        "dateCreated": a.pubDate,
        "item": {
          "@type": "Article",
          "headline": a.title,
          "url": a.link,
          "publisher": { "@type": "Organization", "name": a.source },
        }
      }))
    }
  };

  return (
    <>
      <StructuredData data={pulseSchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto">

            {/* Hero */}
            <FadeIn className="text-center mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <PulseIcon />
                <span>{t('pulse.badge')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
                {t('pulse.title')}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                {t('pulse.subtitle')}
              </p>
            </FadeIn>

            {/* Signal Board */}
            {data && !loading && data.signals.length > 0 && (
              <FadeIn delay={0.1} className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t('pulse.signalBoard')}
                  </h2>
                  <span className="text-xs text-slate-400">
                    — {t('pulse.signalBoardHint')}
                  </span>
                </div>

                <div
                  ref={signalBoardRef}
                  className="flex gap-3 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700"
                >
                  {data.signals.slice(0, 8).map((signal) => (
                    <SignalCard
                      key={signal.id}
                      signal={signal}
                      locale={locale}
                      isActive={activeDeadline === signal.id}
                      onClick={() => handleDeadlineClick(signal.id)}
                      translatedTitle={deadlineTitle(signal.id, signal.title)}
                    />
                  ))}
                </div>
              </FadeIn>
            )}

            {/* Active Deadline Banner */}
            {activeSignal && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/30 flex items-center justify-between gap-4 flex-wrap"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/50">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                      {locale === 'it' ? 'Filtrando per scenario:' : 'Filtering by scenario:'} {deadlineTitle(activeSignal.id, activeSignal.title)}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">
                      {filteredArticles.length} {locale === 'it' ? 'articoli collegati' : 'linked articles'} · {activeSignal.probabilityValue}% {locale === 'it' ? 'probabilità' : 'probability'} · {formatDeadlineYear(activeSignal.date)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/nexthuman"
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    {locale === 'it' ? 'Vedi su NextHuman' : 'View on NextHuman'}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => setActiveDeadline(null)}
                    className="p-1.5 rounded-lg text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Stats */}
            {data && !loading && (
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4" />
                  {filteredArticles.length} {t('pulse.articlesCount')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5">
                  <Link2 className="w-4 h-4" />
                  {data.connectionsCount} {t('pulse.connections')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5">
                  <Rss className="w-4 h-4" />
                  {data.sourcesCount} {t('pulse.sourcesActive')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {formatRelativeTime(data.lastUpdated, locale)}
                </span>
                <button
                  onClick={() => fetchData(true)}
                  disabled={refreshing}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors disabled:opacity-50"
                  title={t('pulse.refresh')}
                >
                  <RefreshCw className={cn('w-3.5 h-3.5', refreshing && 'animate-spin')} />
                  {t('pulse.refresh')}
                </button>
              </div>
            )}

            {/* Search + Filter */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(20);
                    }}
                    placeholder={t('pulse.searchPlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 focus:border-blue-300 dark:focus:border-blue-700 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all',
                    showFilters || activeThemes.length > 0
                      ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400'
                      : 'border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                  )}
                >
                  <Filter className="w-4 h-4" />
                  <span>{t('pulse.filters')}</span>
                  {activeThemes.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-blue-600 text-white">
                      {activeThemes.length}
                    </span>
                  )}
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', showFilters && 'rotate-180')} />
                </button>
              </div>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  showFilters ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                )}
              >
                <div className="flex flex-wrap gap-2">
                  {themeEntries.map(([theme, config]) => {
                    const isActive = activeThemes.includes(theme);
                    const IconComp = config.icon;
                    return (
                      <button
                        key={theme}
                        onClick={() => toggleTheme(theme)}
                        className={cn(
                          'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all',
                          isActive
                            ? `${config.bgClass} ${config.colorClass} ${config.borderClass}`
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
                        )}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        {theme === 'ai' && (locale === 'it' ? 'IA' : 'AI')}
                        {theme === 'ethics' && (locale === 'it' ? 'Etica' : 'Ethics')}
                        {theme === 'policy' && 'Policy'}
                        {theme === 'digital-sovereignty' && (locale === 'it' ? 'Sovranità Digitale' : 'Digital Sovereignty')}
                        {theme === 'civic-tech' && 'Civic Tech'}
                      </button>
                    );
                  })}
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 border border-transparent hover:border-red-100 dark:hover:border-red-900 transition-all"
                    >
                      <X className="w-3.5 h-3.5" />
                      {t('pulse.clearFilters')}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                <p className="text-slate-500 text-sm">{t('pulse.loading')}</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
                <p className="text-slate-600 dark:text-slate-400 text-sm">{error}</p>
                <button
                  onClick={() => fetchData()}
                  className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('pulse.retry')}
                </button>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Search className="w-8 h-8 text-slate-300" />
                <p className="text-slate-500 text-sm">{t('pulse.noResults')}</p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {t('pulse.clearFilters')}
                </button>
              </div>
            ) : (
              <>
                <StaggerChildren className="grid gap-4 sm:grid-cols-1 md:grid-cols-2" staggerDelay={0.05}>
                  {visibleArticles.map((article) => (
                    <StaggerItem key={article.id}>
                      <ArticleCard
                        article={article}
                        locale={locale}
                        onDeadlineClick={handleDeadlineClick}
                        translateDeadline={deadlineTitle}
                      />
                    </StaggerItem>
                  ))}
                </StaggerChildren>

                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 20)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-sm transition-all"
                    >
                      <ChevronDown className="w-4 h-4" />
                      {t('pulse.loadMore')} ({filteredArticles.length - visibleCount} {t('pulse.remaining')})
                    </button>
                  </div>
                )}
              </>
            )}

            {/* CTA: Explore on NextHuman */}
            <FadeIn className="mt-16">
              <Link
                href="/nexthuman"
                className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/50">
                      <Activity className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {t('pulse.ctaTitle')}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                        {t('pulse.ctaDescription')}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
                </div>
              </Link>
            </FadeIn>

            {/* About section */}
            <FadeIn className="mt-6 text-center">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 shadow-sm">
                <Rss className="w-6 h-6 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {t('pulse.aboutTitle')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
                  {t('pulse.aboutDescription')}
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </DotBoard>
    </>
  );
}
