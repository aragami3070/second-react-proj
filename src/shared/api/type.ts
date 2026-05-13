import type { InternalAxiosRequestConfig } from "axios";

export interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export type ApiError = {
  message?: string;
}
