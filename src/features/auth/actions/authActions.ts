import { useAppStore } from "@/shared/store";

export const logoutAction = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
  }

  const { clearUser } = useAppStore.getState();
  clearUser();
};
