import { makeAutoObservable } from 'mobx';
import type { Quote } from '@/entities/quote/types';

export class QuoteState {
  quotes: Quote[] = [];
  randomQuote: Quote | null = null;
  offset = 0;
  limit = 10;
  total = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setQuotes(quotes: Quote[], offset: number): void {
    this.quotes = quotes;
    this.offset = offset;
  }

  setTotal(total: number): void {
    this.total = total;
  }

  setRandomQuote(randomQuote: Quote): void {
    this.randomQuote = randomQuote;
  }
}
