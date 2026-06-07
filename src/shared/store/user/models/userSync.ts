import type { User } from '@/entities/user/types';
import { UserState } from './userState';

export class UserSync {
  constructor(private state: UserState) { }

  authSuccess = (): void => {
    this.state.isAuth = true;
    this.state.isUserLoaded = false;
    this.state.isAuthInitialized = true;
  }

  authFailed = (): void => {
    this.state.isAuth = false;
    this.state.isUserLoaded = false;
    this.state.isAuthInitialized = true;
  }

  setUser = (user: User): void => {
    this.state.user = user;
    this.state.isUserLoaded = true;
    this.state.isAuth = true;
    this.state.isAuthInitialized = true;
  }

  clearUser = (): void => {
    this.state.user = null;
    this.state.isUserLoaded = false;
    this.state.isAuth = false;
    this.state.isAuthInitialized = true;
  }
}
