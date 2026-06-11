import { makeAutoObservable } from 'mobx';
import type { Quote } from '@/entities/quote/types';
import type { QuoteState } from './quoteState';

export class QuoteSync {
  constructor(private state: QuoteState) {
    makeAutoObservable(this);
  }

  get quotes(): Quote[] {
    return this.state.quotes;
  }

  get offset(): number {
    return this.state.offset;
  }

  get limit(): number {
    return this.state.limit;
  }

  get total(): number {
    return this.state.total;
  }

  get randomQuote(): Quote | null {
    return this.state.randomQuote;
  }

  reset(): void {
    this.state.setQuotes([], 0);
    this.state.setTotal(0);
    // this.state.setRandomQuote(null); // maybe? 
  }
}
