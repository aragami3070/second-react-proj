import type { QuoteStateData } from '../types';

export class QuoteState {
  public readonly initial: QuoteStateData = {
    quotes: [],
    randomQuote: null,
    offset: 0,
    limit: 10,
    total: 0,
  };
}

export const initQuote = new QuoteState().initial;
