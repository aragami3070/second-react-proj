import api from './axios';
import type { User } from '@/entities/user/types';

export const authApi = {
  login: (data: {
    email: string;
    password: string
  }) => api.post<{
    accessToken: string,
    refreshToken: string
  }>("Auth/Login", data),

  register: (data: {
    firstName: string;
    secondName: string;
    email: string; password: string
  }) => api.post<{
    accessToken: string,
    refreshToken: string
  }>("Auth/Registration", data),

  getMe: () => api.get<User>("User/myprofile"),

  refresh: (oldRefreshToken: string) => api.post<{
    accessToken: string,
    refreshToken: string
  }>(
    "Auth/RefreshAllTokens",
    null,
    { params: { oldRefreshToken } }
  ),
};
