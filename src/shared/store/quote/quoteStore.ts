// src/shared/store/quoteStore/quoteStore.ts
import type { StoreApi } from 'zustand/vanilla';
import type { RootState } from '../types';
import { QuoteSync } from './models/quoteSync';
import { QuoteAsync } from './models/quoteAsync';

export class QuoteStore {
  public sync: QuoteSync;
  public async: QuoteAsync;

  constructor(private store: StoreApi<RootState>) {
    this.sync = new QuoteSync(store);
    this.async = new QuoteAsync(this.sync);
  }
}
