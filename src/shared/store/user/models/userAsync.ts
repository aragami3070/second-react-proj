import { authApi } from "@/shared/api/authApi";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import { getErrorMessage } from "@/shared/utils/errorTemplateMessage";

import type { UserSync } from "./userSync";
import type { SettingsSync } from "../../settings/models/settingsSync";


export class UserAsync {
  constructor(
    private sync: UserSync,
    private settingsSync: SettingsSync
  ) { }

  logout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
    }
    this.sync.clearUser();
  };

  login = async (data: {
    email: string;
    password: string
  }) => {
    return asyncHandler(
      async () => {
        const tokens = await authApi.login(data);

        if (typeof window !== "undefined") {
          sessionStorage.setItem("refreshToken", tokens.data.refreshToken);
          sessionStorage.setItem("accessToken", tokens.data.accessToken);
        }

        this.sync.authSuccess();
        await this.getMe();
      },
      (error) => {
        this.sync.authFailed();
        this.settingsSync.setError(getErrorMessage(error));
      }
    );
  };

  getMe = async () => {
    return asyncHandler(
      async () => {
        const user = await authApi.getMe();
        this.sync.setUser(user.data);
      },
      (_error) => {
        this.sync.clearUser();
        this.settingsSync.setError("Сессия истекла. Зайдите заново");
      }
    );
  };

  register = async (data: {
    firstName: string;
    secondName: string;
    email: string;
    password: string
  }) => {
    return asyncHandler(
      async () => {
        const tokens = await authApi.register(data);

        if (typeof window !== "undefined") {
          sessionStorage.setItem("refreshToken", tokens.data.refreshToken);
          sessionStorage.setItem("accessToken", tokens.data.accessToken);
        }

        this.sync.authSuccess();
        await this.getMe();
      },
      (error) => {
        this.sync.authFailed();
        this.settingsSync.setError(getErrorMessage(error));
      }
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
      }
    );
  };

  refreshOnStart = async () => {
    return asyncHandler(
      async () => {
        const isRefreshed = await this.refresh();
        if (isRefreshed) {
          await this.getMe();
        } else {
          this.sync.authFailed();
        }
      },
      (_error) => {
        this.logout();
        this.sync.authFailed();
      }
    );
  };
}
