import { useAppStore } from "@/shared/store";
import { getErrorMessage } from "@/shared/utils/errorTemplateMessage";
import type { AxiosError } from "axios";
import type { ApiError } from "@/shared/api/type";

export const asyncHandler = async <T>(
  // Замыкание с основной логикой
  requestLogic: () => Promise<T>,
  // Опциональное замыкание для кастомной ошибки
  errorLogic?: (error: AxiosError<ApiError>) => void,
  // Флаг, если нужен тихий запрос без лоадера
  silent: boolean = false
) => {
  const { startLoading, stopLoading, setError } = useAppStore.getState();

  try {
    if (!silent) startLoading();
    return await requestLogic();
  } catch (e: any) {
    const error = e as AxiosError<ApiError>;

    if (errorLogic) {
      errorLogic(error);
    } else {
      setError(getErrorMessage(error));
    }
  } finally {
    if (!silent) stopLoading();
  }
};
