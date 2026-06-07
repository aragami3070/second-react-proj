import type { Quote } from '@/entities/quote/types';
import { QuoteState } from './quoteState';

export class QuoteSync {
  constructor(private state: QuoteState) {}

  setQuotes = (quotes: Quote[], offset: number): void => {
    this.state.quotes = quotes;
    this.state.offset = offset;
  };

  setTotal = (total: number): void => {
    this.state.total = total;
  };

  setRandomQuote = (randomQuote: Quote): void => {
    this.state.randomQuote = randomQuote;
  };
}
