import { QuoteState } from './models/quoteState';
import { QuoteSync } from './models/quoteSync';
import { QuoteAsync } from './models/quoteAsync';

export class QuoteStore {
  public state: QuoteState;
  public sync: QuoteSync;
  public async: QuoteAsync;

  constructor() {
    this.state = new QuoteState();
    this.sync = new QuoteSync(this.state);
    this.async = new QuoteAsync(this.sync);
  }
}
