import { makeAutoObservable } from 'mobx';
import type { UserState } from './userState';

export class UserSync {
  constructor(private state: UserState) {
    makeAutoObservable(this);
  }

  get user() {
    return this.state.user;
  }

  get isAuth(): boolean {
    return this.state.isAuth;
  }

  get isUserLoaded(): boolean {
    return this.state.isUserLoaded;
  }

  get isAuthInitialized(): boolean {
    return this.state.isAuthInitialized;
  }

  reset(): void {
    this.state.setUser(null);
    this.state.setIsAuth(false);
    this.state.setIsUserLoaded(false);
    this.state.setIsAuthInitialized(true);
  }
}
