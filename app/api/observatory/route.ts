import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { FEED_SOURCES } from '@/data/feeds';
import { DEADLINE_KEYWORDS, THEME_BRIDGE } from '@/data/deadlineKeywords';
import { deadlines } from '@/data/deadlines';
import {
  ObservatoryArticle,
  PulseArticle,
  PulseData,
  LinkedDeadline,
  DeadlineSignal,
} from '@/types/observatory';

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Relatronica Observatory/1.0',
    'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml',
  },
  customFields: {
    item: [
      ['media:content', 'mediaContent'],
      ['media:thumbnail', 'mediaThumbnail'],
      ['media:group', 'mediaGroup'],
      ['enclosure', 'enclosure'],
      ['image', 'image'],
    ],
  },
});

let cachedData: PulseData | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 60 * 1000;

function generateId(title: string, source: string): string {
  const str = `${title}-${source}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function extractExcerpt(content: string | undefined, maxLength: number = 200): string {
  if (!content) return '';
  const text = content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

function extractImageUrl(item: any): string | undefined {
  try {
    if (item.mediaContent?.$?.url) return item.mediaContent.$.url;
    if (Array.isArray(item.mediaContent)) {
      const img = item.mediaContent.find((m: any) => m?.$?.medium === 'image' || m?.$?.url);
      if (img?.$?.url) return img.$.url;
    }
    if (item.mediaThumbnail?.$?.url) return item.mediaThumbnail.$.url;
    if (item.mediaGroup?.['media:content']?.$?.url) return item.mediaGroup['media:content'].$.url;
    if (item.enclosure?.url && (item.enclosure.type?.startsWith('image') || /\.(jpg|jpeg|png|webp|gif)/i.test(item.enclosure.url))) {
      return item.enclosure.url;
    }
    if (item.enclosure?.$?.url) return item.enclosure.$.url;
    if (typeof item.image === 'string' && item.image.startsWith('http')) return item.image;
    if (item.image?.url) return item.image.url;
    const content = item['content:encoded'] || item.content || item.summary || '';
    if (typeof content === 'string') {
      const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch && imgMatch[1].startsWith('http')) return imgMatch[1];
    }
    if (item['og:image']) return item['og:image'];
  } catch {
    // graceful fallback
  }
  return undefined;
}

function matchArticleToDeadlines(article: ObservatoryArticle): LinkedDeadline[] {
  const titleLower = article.title.toLowerCase();
  const textLower = `${article.title} ${article.excerpt}`.toLowerCase();
  const matches: LinkedDeadline[] = [];

  const articleThemes = article.themes;
  const bridgedDeadlineThemes = new Set<string>();
  for (const t of articleThemes) {
    const mapped = THEME_BRIDGE[t];
    if (mapped) mapped.forEach((dt) => bridgedDeadlineThemes.add(dt));
  }

  for (const deadline of deadlines) {
    const keywords = DEADLINE_KEYWORDS[deadline.id];
    if (!keywords) continue;

    let score = 0;

    for (const term of keywords) {
      const termLower = term.toLowerCase();
      if (titleLower.includes(termLower)) {
        score += 3;
      } else if (textLower.includes(termLower)) {
        score += 1;
      }
    }

    if (score > 0) {
      const hasThemeOverlap = deadline.themes.some((dt) => bridgedDeadlineThemes.has(dt));
      if (hasThemeOverlap) score += 1;
    }

    if (score >= 2) {
      matches.push({
        id: deadline.id,
        title: deadline.title,
        date: deadline.date.toISOString(),
        probability: deadline.probability,
        probabilityValue: deadline.probabilityValue,
        relevanceScore: score,
      });
    }
  }

  return matches
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);
}

function computeSignals(articles: PulseArticle[]): DeadlineSignal[] {
  const signalMap = new Map<string, { count: number; recentTitle: string }>();

  for (const article of articles) {
    for (const ld of article.linkedDeadlines) {
      const existing = signalMap.get(ld.id);
      if (existing) {
        existing.count++;
      } else {
        signalMap.set(ld.id, { count: 1, recentTitle: article.title });
      }
    }
  }

  const signals: DeadlineSignal[] = [];
  for (const deadline of deadlines) {
    const entry = signalMap.get(deadline.id);
    if (entry && entry.count >= 1) {
      signals.push({
        id: deadline.id,
        title: deadline.title,
        date: deadline.date.toISOString(),
        probability: deadline.probability,
        probabilityValue: deadline.probabilityValue,
        category: deadline.category,
        articleCount: entry.count,
        themes: deadline.themes,
        recentArticleTitle: entry.recentTitle,
      });
    }
  }

  return signals.sort((a, b) => b.articleCount - a.articleCount);
}

async function fetchAllFeeds(): Promise<PulseData> {
  const articles: ObservatoryArticle[] = [];
  let successCount = 0;

  const feedPromises = FEED_SOURCES.map(async (source) => {
    try {
      const feed = await parser.parseURL(source.url);
      successCount++;
      const items = (feed.items || []).slice(0, 10);

      for (const item of items) {
        if (!item.title || !item.link) continue;
        const article: ObservatoryArticle = {
          id: generateId(item.title, source.name),
          title: item.title.trim(),
          link: item.link,
          source: source.name,
          sourceUrl: feed.link || source.url,
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          excerpt: extractExcerpt(item.contentSnippet || item.content || item.summary),
          themes: source.themes,
          language: source.language,
          imageUrl: extractImageUrl(item),
        };
        articles.push(article);
      }
    } catch (error) {
      console.warn(`Failed to fetch feed: ${source.name} (${source.url})`, error instanceof Error ? error.message : '');
    }
  });

  await Promise.allSettled(feedPromises);

  const sortedArticles = articles
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const seen = new Set<string>();
  const dedupedArticles = sortedArticles.filter((article) => {
    const normalized = article.title.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 50);
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });

  const bySource = new Map<string, ObservatoryArticle[]>();
  for (const article of dedupedArticles) {
    const list = bySource.get(article.source) || [];
    list.push(article);
    bySource.set(article.source, list);
  }

  const MAX_PER_SOURCE = Math.max(5, Math.ceil(dedupedArticles.length / bySource.size));
  const cappedGroups = [...bySource.values()].map((group) => group.slice(0, MAX_PER_SOURCE));
  cappedGroups.sort(
    (a, b) => new Date(b[0].pubDate).getTime() - new Date(a[0].pubDate).getTime()
  );

  const balanced: ObservatoryArticle[] = [];
  const cursors = cappedGroups.map(() => 0);
  let remaining = true;
  while (remaining) {
    remaining = false;
    for (let i = 0; i < cappedGroups.length; i++) {
      if (cursors[i] < cappedGroups[i].length) {
        balanced.push(cappedGroups[i][cursors[i]]);
        cursors[i]++;
        if (cursors[i] < cappedGroups[i].length) remaining = true;
      }
    }
  }

  const pulseArticles: PulseArticle[] = balanced.map((article) => ({
    ...article,
    linkedDeadlines: matchArticleToDeadlines(article),
  }));

  const signals = computeSignals(pulseArticles);
  const connectionsCount = pulseArticles.reduce(
    (sum, a) => sum + a.linkedDeadlines.length, 0
  );

  return {
    articles: pulseArticles,
    signals,
    lastUpdated: new Date().toISOString(),
    sourcesCount: successCount,
    connectionsCount,
  };
}

export async function GET() {
  try {
    const now = Date.now();

    if (cachedData && (now - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
          'X-Cache': 'HIT',
        },
      });
    }

    const data = await fetchAllFeeds();
    cachedData = data;
    lastFetchTime = now;

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        'X-Cache': 'MISS',
      },
    });
  } catch (error) {
    console.error('Pulse API error:', error);

    if (cachedData) {
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=60',
          'X-Cache': 'STALE',
        },
      });
    }

    return NextResponse.json(
      { error: 'Failed to fetch pulse data' },
      { status: 500 }
    );
  }
}
