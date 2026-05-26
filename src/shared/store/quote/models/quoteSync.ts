import type { StoreApi } from 'zustand/vanilla';
import type { RootState } from '../../types';
import type { Quote } from '@/entities/quote/types';

export class QuoteSync {
  constructor(private store: StoreApi<RootState>) {}

  setQuotes = (quotes: Quote[], offset: number): void => {
    this.store.setState((prev) => ({
      quote: {
        ...prev.quote,
        quotes,
        offset,
      }
    }));
  };

  setTotal = (total: number): void => {
    this.store.setState((prev) => ({
      quote: {
        ...prev.quote,
        total,
      }
    }));
  };

  setRandomQuote = (randomQuote: Quote): void => {
    this.store.setState((prev) => ({
      quote: {
        ...prev.quote,
        randomQuote,
      }
    }));
  };
}
