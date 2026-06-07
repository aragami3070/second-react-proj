import { createStore, type StoreApi } from 'zustand/vanilla';
import { RootState } from './types';
import { SettingsStore } from './settings';
import { initSettings } from './settings/models/settingsState';
import { initUser } from './user/models/userState';
import { UserStore } from './user';
import { initQuote } from './quote/models/quoteState';
import { QuoteStore } from './quote';

export class RootStore {
  public store: StoreApi<RootState>;

  // Дочерние сторы
  public settings: SettingsStore;
  public user: UserStore;
  public quote: QuoteStore;

  constructor() {
    this.store = createStore<RootState>()(() => ({
      settings: initSettings,
      user: initUser,
      quote: initQuote,
    }));

    this.settings = new SettingsStore(this.store);
    this.user = new UserStore(this.store, this.settings.sync);
    this.quote = new QuoteStore(this.store);
  }
}

export const rootStore = new RootStore();

// Service Locator - доступ к стору вне React-контекста
export class StoreLocator {
  static get(): RootStore {
    return rootStore;
  }
}
