import { StateCreator } from 'zustand';
import type { User } from '@/entities/user/types';

export interface UserState {
  user: User | null;
  isAuth: boolean;
  isUserLoaded: boolean;
  isAuthInitialized: boolean;
  authSuccess: () => void;
  authFailed: () => void;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const createUserStore: StateCreator<UserState> = (set) => ({
  user: null,
  isAuth: false,
  isUserLoaded: false,
  isAuthInitialized: false,

  authSuccess: () => set({
    isAuth: true,
    isUserLoaded: false,
    isAuthInitialized: true
  }),
  authFailed: () => set({
    isAuth: false,
    isUserLoaded: false,
    isAuthInitialized: true
  }),
  setUser: (user) => set({
    user,
    isUserLoaded: true,
    isAuth: true,
    isAuthInitialized: true
  }),
  clearUser: () => set({
    user: null,
    isUserLoaded: false,
    isAuth: false,
    isAuthInitialized: true
  }),
});
