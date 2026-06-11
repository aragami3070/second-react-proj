import { makeAutoObservable } from "mobx";
import { settingsStore, SettingsStore } from "./settings";
import { userStore, UserStore } from "./user";
import { quoteStore, QuoteStore } from "./quote";

export class RootStore {
  // Дочерние сторы
  public settings: SettingsStore;
  public user: UserStore;
  public quote: QuoteStore;

  constructor() {
    this.settings = settingsStore;
    this.user = userStore;
    this.quote = quoteStore;
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

// Service Locator - доступ к стору вне React-контекста
export class StoreLocator {
  static get(): RootStore {
    return rootStore;
  }
}
