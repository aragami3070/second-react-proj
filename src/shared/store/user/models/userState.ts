import type { UserStateData } from '../types';

export class UserState {
  public readonly initial: UserStateData = {
    user: null,
    isAuth: false,
    isUserLoaded: false,
    isAuthInitialized: false,
  };
}

export const initUser = new UserState().initial;
