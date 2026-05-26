import type { StoreApi } from 'zustand/vanilla';
import type { RootState } from '../types';

import { SettingsState } from './models/settingsState';
import { SettingsSync } from './models/settingsSync';

export class SettingsStore {
  public state: SettingsState;
  public sync: SettingsSync;

  constructor(store: StoreApi<RootState>) {
    this.state = new SettingsState();
    this.sync = new SettingsSync(store);
  }
}
