import { makeAutoObservable } from 'mobx';
import { SettingsStore } from './settings';
import { UserStore } from './user';
import { QuoteStore } from './quote';

export class RootStore {
  // Дочерние сторы
  public settings: SettingsStore;
  public user: UserStore;
  public quote: QuoteStore;

  constructor() {
    this.settings = new SettingsStore();
    this.user = new UserStore(this.settings.state);
    this.quote = new QuoteStore();
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();

// Service Locator - доступ к стору вне React-контекста
export class StoreLocator {
  static get(): RootStore {
    return rootStore;
  }
}
