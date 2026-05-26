import type { StoreApi } from 'zustand/vanilla';
import type { RootState } from '../../types';
import type { User } from '@/entities/user/types';

export class UserSync {
  constructor(private store: StoreApi<RootState>) { }

  authSuccess = (): void => {
    this.store.setState((prev) => ({
      user: {
        ...prev.user,
        isAuth: true,
        isUserLoaded: false,
        isAuthInitialized: true,
      }
    }));
  }

  authFailed = (): void => {
    this.store.setState((prev) => ({
      user: {
        ...prev.user,
        isAuth: false,
        isUserLoaded: false,
        isAuthInitialized: true,
      }
    }));
  }

  setUser = (user: User): void => {
    this.store.setState((prev) => ({
      user: {
        ...prev.user,
        user,
        isUserLoaded: true,
        isAuth: true,
        isAuthInitialized: true,
      }
    }));
  }

  clearUser = (): void => {
    this.store.setState((prev) => ({
      user: {
        ...prev.user,
        user: null,
        isUserLoaded: false,
        isAuth: false,
        isAuthInitialized: true,
      }
    }));
  }
}
