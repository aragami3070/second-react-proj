import { authApi } from "@/shared/api/authApi";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import { getErrorMessage } from "@/shared/utils/errorTemplateMessage";

import type { UserState } from "./userState";
import type { SettingsState } from "../../settings/models/settingsState";
import { makeAutoObservable } from "mobx";

export class UserAsync {
  constructor(
    private state: UserState,
    private settings: SettingsState,
  ) {
    makeAutoObservable(this);
  }

  logout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
    }
    this.state.setUser(null);
    this.state.setIsAuth(false);
    this.state.setIsUserLoaded(false);
    this.state.setIsAuthInitialized(true);
  };

  login = async (data: { email: string; password: string }) => {
    return asyncHandler(
      async () => {
        const tokens = await authApi.login(data);

        if (typeof window !== "undefined") {
          sessionStorage.setItem("refreshToken", tokens.data.refreshToken);
          sessionStorage.setItem("accessToken", tokens.data.accessToken);
        }

        this.state.setIsAuth(true);
        this.state.setIsUserLoaded(false);
        this.state.setIsAuthInitialized(true);
        await this.getMe();
      },
      (error) => {
        this.state.setIsAuth(false);
        this.state.setIsUserLoaded(false);
        this.state.setIsAuthInitialized(true);
        this.settings.setError(getErrorMessage(error));
      },
    );
  };

  getMe = async () => {
    return asyncHandler(
      async () => {
        const user = await authApi.getMe();
        this.state.setUser(user.data);
        this.state.setIsUserLoaded(true);
        this.state.setIsAuth(true);
        this.state.setIsAuthInitialized(true);
      },
      (_error) => {
        this.state.setUser(null);
        this.state.setIsAuth(false);
        this.state.setIsUserLoaded(false);
        this.state.setIsAuthInitialized(true);
        this.settings.setError("Сессия истекла. Зайдите заново");
      },
    );
  };

  register = async (data: {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
  }) => {
    return asyncHandler(
      async () => {
        const tokens = await authApi.register(data);

        if (typeof window !== "undefined") {
          sessionStorage.setItem("refreshToken", tokens.data.refreshToken);
          sessionStorage.setItem("accessToken", tokens.data.accessToken);
        }

        this.state.setIsAuth(true);
        this.state.setIsUserLoaded(false);
        this.state.setIsAuthInitialized(true);
        await this.getMe();
      },
      (error) => {
        this.state.setIsAuth(false);
        this.state.setIsUserLoaded(false);
        this.state.setIsAuthInitialized(true);
        this.settings.setError(getErrorMessage(error));
      },
    );
  };

  refresh = async () => {
    return asyncHandler(
      async () => {
        if (typeof window !== "undefined") {
          const oldRefreshToken = sessionStorage.getItem("refreshToken");

          const res = await authApi.refresh(oldRefreshToken ?? "");
          sessionStorage.setItem("refreshToken", res.data.refreshToken);
          sessionStorage.setItem("accessToken", res.data.accessToken);

          return true;
        }
        return false;
      },
      (_error) => {
        this.logout();
        return false;
      },
    );
  };

  refreshOnStart = async () => {
    return asyncHandler(
      async () => {
        const isRefreshed = await this.refresh();
        if (isRefreshed) {
          await this.getMe();
        } else {
          this.state.setIsAuth(false);
          this.state.setIsUserLoaded(false);
          this.state.setIsAuthInitialized(true);
        }
      },
      (_error) => {
        this.logout();
        this.state.setIsAuth(false);
        this.state.setIsUserLoaded(false);
        this.state.setIsAuthInitialized(true);
      },
    );
  };
}
