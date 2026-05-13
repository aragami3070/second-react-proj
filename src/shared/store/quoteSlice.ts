import { StateCreator } from 'zustand';
import type { Quote } from '@/entities/quote/types';

export interface QuoteState {
  quotes: Quote[];
  randomQuote: Quote | null;
  offset: number;
  limit: number;
  total: number;
  setQuotes: (quotes: Quote[], offset: number) => void;
  setTotal: (total: number) => void;
  setRandomQuote: (quote: Quote) => void;
}

export const createQuoteSlice: StateCreator<QuoteState> = (set) => ({
  quotes: [],
  randomQuote: null,
  offset: 0,
  limit: 10,
  total: 0,

  setQuotes: (quotes, offset) => set({ quotes, offset }),
  setTotal: (total) => set({ total }),
  setRandomQuote: (randomQuote) => set({ randomQuote }),
});
