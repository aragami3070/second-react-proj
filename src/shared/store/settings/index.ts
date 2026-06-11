import { SettingsState } from './models/settingsState';
import { SettingsSync } from './models/settingsSync';

export class SettingsStore {
  public state: SettingsState;
  public sync: SettingsSync;

  constructor() {
    this.state = new SettingsState();
    this.sync = new SettingsSync(this.state);
  }
}

export const settingsStore = new SettingsStore();
