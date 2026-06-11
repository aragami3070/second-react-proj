import { UserState } from "./models/userState";
import { UserSync } from "./models/userSync";
import { UserAsync } from "./models/userAsync";
import { SettingsState } from "../settings/models/settingsState";
import { settingsStore } from "../settings";

export class UserStore {
  public state: UserState;
  public sync: UserSync;
  public async: UserAsync;

  constructor(settings: SettingsState) {
    this.state = new UserState();
    this.sync = new UserSync(this.state);
    this.async = new UserAsync(this.state, settings);
  }
}

export const userStore = new UserStore(settingsStore.state);
