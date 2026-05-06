import axios from "axios";
import type { AxiosError, AxiosInstance } from "axios";
import type { ApiError, RetryAxiosRequestConfig } from "./type";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    // NOTE: попытка обновить accessToken и сделать запрос снова
    if (error.response?.status === 401
      && !originalRequest._retry
      && !originalRequest.url?.includes("Auth/RefreshAllTokens")
    ) {
      originalRequest._retry = true;

      const oldRefreshToken = sessionStorage.getItem("refreshToken");
      if (!oldRefreshToken) {
        sessionStorage.setItem("accessToken", "");
        sessionStorage.setItem("refreshToken", "");
        return;
      }
      try {
        const res = await api.put<{ access_token: string, refresh_token: string }>(
          "Auth/RefreshAllTokens",
          null,
          { params: oldRefreshToken }
        );

        sessionStorage.setItem("accessToken", res.data.access_token);
        sessionStorage.setItem("refreshToken", res.data.refresh_token);

        // повторяем запрос с новым accessToken
        originalRequest.headers.Authorization = `Bearer ${res.data.access_token}`;
        return await api(originalRequest);
      } catch (e: any) {
        sessionStorage.setItem("accessToken", "");
        sessionStorage.setItem("refreshToken", "");
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
