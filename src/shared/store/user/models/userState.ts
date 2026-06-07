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
}
