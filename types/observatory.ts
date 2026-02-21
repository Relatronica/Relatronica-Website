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

export interface LinkedDeadline {
  id: string;
  title: string;
  date: string;
  probability: string;
  probabilityValue: number;
  relevanceScore: number;
}

export interface PulseArticle extends ObservatoryArticle {
  linkedDeadlines: LinkedDeadline[];
}

export interface DeadlineSignal {
  id: string;
  title: string;
  date: string;
  probability: string;
  probabilityValue: number;
  category?: string;
  articleCount: number;
  themes: string[];
  recentArticleTitle?: string;
}

export interface PulseData {
  articles: PulseArticle[];
  signals: DeadlineSignal[];
  lastUpdated: string;
  sourcesCount: number;
  connectionsCount: number;
}

export interface ObservatoryData {
  articles: ObservatoryArticle[];
  lastUpdated: string;
  sourcesCount: number;
}
