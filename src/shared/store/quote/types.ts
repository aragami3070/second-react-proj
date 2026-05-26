import type { Quote } from '@/entities/quote/types';

export type QuoteStateData = {
  quotes: Quote[];
  randomQuote: Quote | null;
  offset: number;
  limit: number;
  total: number;
};
