export type ObservatoryTheme = 
  | 'ai'
  | 'ethics'
  | 'policy'
  | 'digital-sovereignty'
  | 'civic-tech';

export interface FeedSource {
  name: string;
  url: string;
  themes: ObservatoryTheme[];
  language: 'it' | 'en' | 'multi';
  icon?: string;
}

export interface ObservatoryArticle {
  id: string;
  title: string;
  link: string;
  source: string;
  sourceUrl: string;
  pubDate: string;
  excerpt: string;
  themes: ObservatoryTheme[];
  language: 'it' | 'en' | 'multi';
  imageUrl?: string;
}

export interface ObservatoryData {
  articles: ObservatoryArticle[];
  lastUpdated: string;
  sourcesCount: number;
}
