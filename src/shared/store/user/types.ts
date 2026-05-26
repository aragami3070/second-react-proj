import type { User } from '@/entities/user/types';

export type UserStateData = {
  user: User | null;
  isAuth: boolean;
  isUserLoaded: boolean;
  isAuthInitialized: boolean;
};
