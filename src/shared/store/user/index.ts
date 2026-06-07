import { UserState } from './models/userState';
import { UserSync } from './models/userSync';
import { UserAsync } from './models/userAsync';
import { SettingsSync } from '../settings/models/settingsSync';

export class UserStore {
  public state: UserState;
  public sync: UserSync;
  public async: UserAsync;

  constructor(settingsSync: SettingsSync) {
    this.state = new UserState();
    this.sync = new UserSync(this.state);
    this.async = new UserAsync(this.sync, settingsSync);
  }
}
