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
}
