"use client"
import { getErrorMessage } from "@/shared/utils/errorTemplateMessage";
import type { AxiosError } from "axios";
import type { ApiError } from "@/shared/api/type";
import { StoreLocator } from "@/shared/store";

export const asyncHandler = async <T>(
  // Замыкание с основной логикой
  requestLogic: () => Promise<T>,
  // Опциональное замыкание для кастомной ошибки
  errorLogic?: (error: AxiosError<ApiError>) => T,
  // Флаг, если нужен тихий запрос без лоадера
  silent: boolean = false
) => {
  const settingsState = StoreLocator.get().settings.state;

  try {
    if (!silent) settingsState.setLoading(true);
    return await requestLogic();
  } catch (e: any) {
    const error = e as AxiosError<ApiError>;

    if (errorLogic) {
      return errorLogic(error);
    } else {
      settingsState.setError(getErrorMessage(error));
    }
  } finally {
    if (!silent) settingsState.setLoading(false);
  }
};
