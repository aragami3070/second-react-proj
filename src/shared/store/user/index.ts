import type { StoreApi } from 'zustand/vanilla';
import type { RootState } from '../types';
import { UserSync } from './models/userSync';
import { UserAsync } from './models/userAsync';
import { SettingsSync } from '../settings/models/settingsSync';

export class UserStore {
  public sync: UserSync;
  public async: UserAsync;

  constructor(private store: StoreApi<RootState>, settingsSync: SettingsSync) {
    this.sync = new UserSync(store);
    this.async= new UserAsync(this.sync, settingsSync);
  }
}
