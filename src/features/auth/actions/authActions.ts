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
export const getMeAction = async () => {
  const { setUser, clearUser, setError } = useAppStore.getState();

  asyncHandler(
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
