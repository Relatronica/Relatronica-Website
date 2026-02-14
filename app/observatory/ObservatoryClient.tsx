'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useI18n } from '@/lib/i18n';
import { DotBoard } from '@/components/DotBoard';
import { StructuredData } from '@/components/StructuredData';
import {
  Radar,
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
  Loader2,
  AlertCircle,
  Rss,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ObservatoryArticle, ObservatoryData, ObservatoryTheme } from '@/types/observatory';

// Theme configuration with icons and colors
const THEME_CONFIG: Record<
  ObservatoryTheme,
  { icon: typeof Brain; colorClass: string; bgClass: string; borderClass: string }
> = {
  ai: { icon: Brain, colorClass: 'text-violet-600', bgClass: 'bg-violet-50', borderClass: 'border-violet-200' },
  ethics: { icon: Scale, colorClass: 'text-rose-600', bgClass: 'bg-rose-50', borderClass: 'border-rose-200' },
  policy: { icon: Shield, colorClass: 'text-blue-600', bgClass: 'bg-blue-50', borderClass: 'border-blue-200' },
  'digital-sovereignty': { icon: Globe2, colorClass: 'text-amber-600', bgClass: 'bg-amber-50', borderClass: 'border-amber-200' },
  'civic-tech': { icon: Users, colorClass: 'text-sky-600', bgClass: 'bg-sky-50', borderClass: 'border-sky-200' },
};

function formatRelativeTime(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return locale === 'it' ? 'Recente' : 'Recent';
  }

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  // Handle future dates or very small differences
  if (diffMs < 60000) {
    return locale === 'it' ? 'Ora' : 'Now';
  }

  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (locale === 'it') {
    if (diffMins < 60) return `${diffMins} min fa`;
    if (diffHours < 24) return `${diffHours}h fa`;
    if (diffDays < 7) return `${diffDays}g fa`;
    return date.toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
  } else {
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }
}

function ArticleCard({ article, locale }: { article: ObservatoryArticle; locale: string }) {
  const primaryTheme = article.themes[0];
  const config = THEME_CONFIG[primaryTheme];
  const IconComponent = config?.icon || Newspaper;
  const [imgError, setImgError] = useState(false);
  const hasImage = article.imageUrl && !imgError;

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden"
    >
      {/* Image */}
      {hasImage && (
        <div className="relative w-full h-40 bg-slate-100 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.imageUrl}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            loading="lazy"
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
          {/* Source badge on image */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
            <IconComponent className={cn('w-3 h-3', config?.colorClass || 'text-slate-600')} />
            <span className="text-[10px] font-semibold text-slate-700">{article.source}</span>
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Theme Icon - only show when there's no image */}
          {!hasImage && (
            <div className={cn('p-2.5 rounded-xl flex-shrink-0', config?.bgClass || 'bg-slate-50')}>
              <IconComponent className={cn('w-5 h-5', config?.colorClass || 'text-slate-600')} />
            </div>
          )}

          <div className="flex-1 min-w-0">
            {/* Source and Date */}
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

            {/* Title */}
            <h3 className="text-[15px] font-semibold text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">
                {article.excerpt}
              </p>
            )}

            {/* Themes + External Link */}
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
  );
}

export default function ObservatoryClient() {
  const { t, locale } = useI18n();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://relatronica.com';

  const [data, setData] = useState<ObservatoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [activeThemes, setActiveThemes] = useState<ObservatoryTheme[]>([]);
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
      const result: ObservatoryData = await res.json();
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

  // Filtered articles
  const filteredArticles = useMemo(() => {
    if (!data) return [];
    let articles = data.articles;

    // Filter by theme
    if (activeThemes.length > 0) {
      articles = articles.filter((a) =>
        a.themes.some((t) => activeThemes.includes(t))
      );
    }

    // Filter by search
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
  }, [data, activeThemes, searchQuery]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const toggleTheme = (theme: ObservatoryTheme) => {
    setActiveThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
    setVisibleCount(20);
  };

  const clearFilters = () => {
    setActiveThemes([]);
    setSearchQuery('');
    setVisibleCount(20);
  };

  const themeEntries = Object.entries(THEME_CONFIG) as [ObservatoryTheme, typeof THEME_CONFIG[ObservatoryTheme]][];

  const observatorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": locale === 'it' ? "Osservatorio - Relatronica" : "Observatory - Relatronica",
    "description": locale === 'it'
      ? "Hub di conoscenza auto-aggiornante su etica, IA, tecnologia sostenibile, policy e sovranità digitale."
      : "Self-updating knowledge hub on ethics, AI, sustainable technology, policy and digital sovereignty.",
    "url": `${siteUrl}/observatory`,
    "mainEntity": {
      "@type": "DataFeed",
      "name": "Relatronica Observatory Feed",
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
      <StructuredData data={observatorySchema} />
      <DotBoard>
        <div className="min-h-screen pt-32 pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Radar className="w-4 h-4" />
                <span>{t('observatory.badge')}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
                {t('observatory.title')}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {t('observatory.subtitle')}
              </p>
            </div>

            {/* Stats Bar */}
            {data && !loading && (
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4" />
                  {filteredArticles.length} {t('observatory.articlesCount')}
                </span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Rss className="w-4 h-4" />
                  {data.sourcesCount} {t('observatory.sourcesActive')}
                </span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {t('observatory.lastUpdate')}: {formatRelativeTime(data.lastUpdated, locale)}
                </span>
                <button
                  onClick={() => fetchData(true)}
                  disabled={refreshing}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50"
                  title={t('observatory.refresh')}
                >
                  <RefreshCw className={cn('w-3.5 h-3.5', refreshing && 'animate-spin')} />
                  {t('observatory.refresh')}
                </button>
              </div>
            )}

            {/* Search + Filter Bar */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(20);
                    }}
                    placeholder={t('observatory.searchPlaceholder')}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/90 backdrop-blur-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 transition-all"
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

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all',
                    showFilters || activeThemes.length > 0
                      ? 'border-blue-200 bg-blue-50 text-blue-600'
                      : 'border-slate-200 bg-white/90 text-slate-600 hover:bg-slate-50'
                  )}
                >
                  <Filter className="w-4 h-4" />
                  <span>{t('observatory.filters')}</span>
                  {activeThemes.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-blue-600 text-white">
                      {activeThemes.length}
                    </span>
                  )}
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', showFilters && 'rotate-180')} />
                </button>
              </div>

              {/* Theme Filters */}
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
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
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
                  {activeThemes.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all"
                    >
                      <X className="w-3.5 h-3.5" />
                      {t('observatory.clearFilters')}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                <p className="text-slate-500 text-sm">{t('observatory.loading')}</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
                <p className="text-slate-600 text-sm">{error}</p>
                <button
                  onClick={() => fetchData()}
                  className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('observatory.retry')}
                </button>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Search className="w-8 h-8 text-slate-300" />
                <p className="text-slate-500 text-sm">{t('observatory.noResults')}</p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  {t('observatory.clearFilters')}
                </button>
              </div>
            ) : (
              <>
                {/* Articles Grid */}
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {visibleArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} locale={locale} />
                  ))}
                </div>

                {/* Load More */}
                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 20)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 bg-white/90 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:shadow-sm transition-all"
                    >
                      <ChevronDown className="w-4 h-4" />
                      {t('observatory.loadMore')} ({filteredArticles.length - visibleCount} {t('observatory.remaining')})
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Footer Info */}
            <div className="mt-16 text-center">
              <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 shadow-sm">
                <Rss className="w-6 h-6 text-blue-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {t('observatory.aboutTitle')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
                  {t('observatory.aboutDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DotBoard>
    </>
  );
}
