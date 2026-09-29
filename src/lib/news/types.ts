// ============================================================
// src/lib/news/types.ts
// YDS Master — Gündemdeki İngilizce Haberler Veri Tipleri
// ============================================================

export type NewsCategory =
  | "technology"
  | "world"
  | "economy"
  | "environment"
  | "health"
  | "culture"
  | "education"
  | "lifestyle";

export type NewsLevel = "A2" | "B1" | "B2" | "C1" | "C2";

export interface NewspaperClipping {
  paperName: string;
  edition: string;
  dateString: string;
  headline: string;
  subheadline: string;
  tagline: string;
  accentColor: string;
  badgeEmoji: string;
}

export interface NewsParagraph {
  en: string;
  tr: string;
}

export interface NewsKeyVocabulary {
  word: string;
  type: string; // "verb" | "noun" | "adj" | "adv"
  meaningTr: string;
  synonymsEn: string[];
  exampleSentenceEn: string;
  exampleSentenceTr: string;
}

export interface NewsArticle {
  id: string; // e.g. "news-0001"
  slug: string;
  category: NewsCategory;
  categoryLabelTr: string;
  categoryEmoji: string;
  level: NewsLevel;
  date: string;
  readTimeMin: number;
  sourceName: string;
  newspaperClipping: NewspaperClipping;
  titleEn: string;
  titleTr: string;
  summaryEn: string;
  summaryTr: string;
  paragraphs: NewsParagraph[];
  keyVocabulary: NewsKeyVocabulary[];
}

export interface NewsCategoryMeta {
  id: NewsCategory;
  labelTr: string;
  labelEn: string;
  emoji: string;
  descriptionTr: string;
  gradient: string;
}

export interface NewsFilterQuery {
  page?: number;
  limit?: number;
  category?: NewsCategory | "all";
  level?: NewsLevel | "all";
  searchQuery?: string;
}

export interface PaginatedNewsResult {
  articles: NewsArticle[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
