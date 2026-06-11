import { UserState } from "./models/userState";
import { UserSync } from "./models/userSync";
import { UserAsync } from "./models/userAsync";
import { SettingsState } from "../settings/models/settingsState";

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
