import { makeAutoObservable } from 'mobx';
import type { User } from '@/entities/user/types';

export class UserState {
  user: User | null = null;
  isAuth = false;
  isUserLoaded = false;
  isAuthInitialized = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User | null): void {
    this.user = user;
  }

  setIsAuth(value: boolean): void {
    this.isAuth = value;
  }

  setIsUserLoaded(value: boolean): void {
    this.isUserLoaded = value;
  }

  setIsAuthInitialized(value: boolean): void {
    this.isAuthInitialized = value;
  }
}
