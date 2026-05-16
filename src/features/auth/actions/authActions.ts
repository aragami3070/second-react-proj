import { authApi } from "@/shared/api/authApi";
import { useAppStore } from "@/shared/store";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import { getErrorMessage } from "@/shared/utils/errorTemplateMessage";

export const logoutAction = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
  }

  const { clearUser } = useAppStore.getState();
  clearUser();
};

export const loginAction = async (data: {
  email: string;
  password: string
}) => {
  const { authSuccess, authFailed, setError } = useAppStore.getState();
  return asyncHandler(
    async () => {
      const tokens = await authApi.login(data);

      if (typeof window !== "undefined") {
        sessionStorage.setItem("refreshToken", tokens.data.refreshToken);
        sessionStorage.setItem("accessToken", tokens.data.accessToken);
      }

      authSuccess();
      await getMeAction();
    },
    (error) => {
      authFailed();
      setError(getErrorMessage(error));
    }
  )
}

export const getMeAction = async () => {
  const { setUser, clearUser, setError } = useAppStore.getState();

  return asyncHandler(
    async () => {
      const user = await authApi.getMe();
      setUser(user.data);
    },
    (_) => {
      clearUser();
      setError("Сессия истекла. Зайдите заново");
    }
  )
}

export const registerAction = async (data: {
  firstName: string;
  secondName: string;
  email: string;
  password: string
}) => {
  const { authSuccess, authFailed, setError } = useAppStore.getState();
  return asyncHandler(
    async () => {
      const tokens = await authApi.register(data);

      if (typeof window !== "undefined") {
        sessionStorage.setItem("refreshToken", tokens.data.refreshToken);
        sessionStorage.setItem("accessToken", tokens.data.accessToken);
      }

      authSuccess();
      await getMeAction();
    },
    (error) => {
      authFailed();
      setError(getErrorMessage(error));
    }
  )
}
