import { FeedSource } from '@/types/observatory';

export const FEED_SOURCES: FeedSource[] = [
  // --- AI & Ethics ---
  {
    name: 'MIT Technology Review - AI',
    url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed',
    themes: ['ai', 'ethics'],
    language: 'en',
  },
  {
    name: 'AlgorithmWatch',
    url: 'https://algorithmwatch.org/en/feed/',
    themes: ['ai', 'ethics', 'policy'],
    language: 'en',
  },
  {
    name: 'AI Ethics Brief',
    url: 'https://brief.montrealethics.ai/feed',
    themes: ['ai', 'ethics'],
    language: 'en',
  },
  {
    name: 'AI Now Institute',
    url: 'https://ainowinstitute.org/feed',
    themes: ['ai', 'ethics', 'policy'],
    language: 'en',
  },
  {
    name: 'Future of Life Institute',
    url: 'https://futureoflife.org/feed/',
    themes: ['ai', 'ethics'],
    language: 'en',
  },
  {
    name: 'Data & Society',
    url: 'https://datasociety.net/feed/',
    themes: ['ai', 'ethics'],
    language: 'en',
  },

  // --- Policy & Digital Rights ---
  {
    name: 'Electronic Frontier Foundation',
    url: 'https://www.eff.org/rss/updates.xml',
    themes: ['digital-sovereignty', 'policy'],
    language: 'en',
  },
  {
    name: 'EDRi - European Digital Rights',
    url: 'https://edri.org/feed/',
    themes: ['digital-sovereignty', 'policy'],
    language: 'en',
  },
  {
    name: 'Access Now',
    url: 'https://www.accessnow.org/feed/',
    themes: ['digital-sovereignty', 'policy'],
    language: 'en',
  },
  {
    name: 'The Markup',
    url: 'https://themarkup.org/feeds/rss.xml',
    themes: ['ai', 'ethics', 'policy'],
    language: 'en',
  },
  {
    name: 'Netzpolitik.org',
    url: 'https://netzpolitik.org/feed/',
    themes: ['digital-sovereignty', 'policy'],
    language: 'en',
  },
  {
    name: 'Mozilla Foundation',
    url: 'https://foundation.mozilla.org/en/blog/rss/',
    themes: ['digital-sovereignty', 'policy'],
    language: 'en',
  },

  // --- Global Perspectives ---
  {
    name: 'Rest of World',
    url: 'https://restofworld.org/feed/',
    themes: ['digital-sovereignty', 'policy', 'ai'],
    language: 'en',
  },

  // --- Civic Tech ---
  {
    name: 'Civic Tech Field Guide',
    url: 'https://civictech.guide/feed/',
    themes: ['civic-tech', 'digital-sovereignty'],
    language: 'en',
  },
  {
    name: 'Open Source Initiative',
    url: 'https://opensource.org/feed',
    themes: ['digital-sovereignty', 'civic-tech'],
    language: 'en',
  },

  // --- Italian Sources ---
  {
    name: 'Agenda Digitale',
    url: 'https://www.agendadigitale.eu/feed/',
    themes: ['ai', 'policy', 'digital-sovereignty'],
    language: 'it',
  },
  {
    name: 'ForumPA',
    url: 'https://www.forumpa.it/feed/',
    themes: ['policy', 'civic-tech', 'digital-sovereignty'],
    language: 'it',
  },
];

export const THEME_LABELS: Record<string, { it: string; en: string }> = {
  'ai': { it: 'Intelligenza Artificiale', en: 'Artificial Intelligence' },
  'ethics': { it: 'Etica', en: 'Ethics' },
  'policy': { it: 'Policy & Regolamentazione', en: 'Policy & Regulation' },
  'digital-sovereignty': { it: 'Sovranità Digitale', en: 'Digital Sovereignty' },
  'civic-tech': { it: 'Civic Tech', en: 'Civic Tech' },
};
