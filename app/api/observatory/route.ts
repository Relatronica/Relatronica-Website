import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { FEED_SOURCES } from '@/data/feeds';
import { ObservatoryArticle, ObservatoryData } from '@/types/observatory';

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

// In-memory cache
let cachedData: ObservatoryData | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

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
  // Strip HTML tags
  const text = content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

function extractImageUrl(item: any): string | undefined {
  try {
    // 1. media:content with url attribute
    if (item.mediaContent?.$?.url) return item.mediaContent.$.url;
    // media:content as array
    if (Array.isArray(item.mediaContent)) {
      const img = item.mediaContent.find((m: any) => m?.$?.medium === 'image' || m?.$?.url);
      if (img?.$?.url) return img.$.url;
    }

    // 2. media:thumbnail
    if (item.mediaThumbnail?.$?.url) return item.mediaThumbnail.$.url;

    // 3. media:group > media:content
    if (item.mediaGroup?.['media:content']?.$?.url) return item.mediaGroup['media:content'].$.url;

    // 4. enclosure with image type
    if (item.enclosure?.url && (item.enclosure.type?.startsWith('image') || /\.(jpg|jpeg|png|webp|gif)/i.test(item.enclosure.url))) {
      return item.enclosure.url;
    }
    // enclosure as object with $ notation
    if (item.enclosure?.$?.url) return item.enclosure.$.url;

    // 5. Explicit image field
    if (typeof item.image === 'string' && item.image.startsWith('http')) return item.image;
    if (item.image?.url) return item.image.url;

    // 6. Extract from content:encoded or content HTML
    const content = item['content:encoded'] || item.content || item.summary || '';
    if (typeof content === 'string') {
      const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch && imgMatch[1].startsWith('http')) return imgMatch[1];
    }

    // 7. og:image style fields some parsers expose
    if (item['og:image']) return item['og:image'];
  } catch {
    // Gracefully handle any parsing issues
  }
  
  return undefined;
}

async function fetchAllFeeds(): Promise<ObservatoryData> {
  const articles: ObservatoryArticle[] = [];
  let successCount = 0;

  const feedPromises = FEED_SOURCES.map(async (source) => {
    try {
      const feed = await parser.parseURL(source.url);
      successCount++;

      const items = (feed.items || []).slice(0, 10); // Max 10 items per feed

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

  // Sort by date (newest first) and deduplicate by title similarity
  const sortedArticles = articles
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  // Simple deduplication by normalized title
  const seen = new Set<string>();
  const dedupedArticles = sortedArticles.filter((article) => {
    const normalized = article.title.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 50);
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });

  return {
    articles: dedupedArticles,
    lastUpdated: new Date().toISOString(),
    sourcesCount: successCount,
  };
}

export async function GET() {
  try {
    const now = Date.now();

    // Return cached data if fresh
    if (cachedData && (now - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
          'X-Cache': 'HIT',
        },
      });
    }

    // Fetch fresh data
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
    console.error('Observatory API error:', error);
    
    // Return stale cache if available
    if (cachedData) {
      return NextResponse.json(cachedData, {
        headers: {
          'Cache-Control': 'public, s-maxage=60',
          'X-Cache': 'STALE',
        },
      });
    }

    return NextResponse.json(
      { error: 'Failed to fetch observatory data' },
      { status: 500 }
    );
  }
}
