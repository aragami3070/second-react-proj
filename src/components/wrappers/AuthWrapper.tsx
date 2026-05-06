import type { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useRef, type ReactNode } from "react";
import { refreshAuth } from "../../store/user";
import { Navigate, useLocation } from "react-router-dom";
import { routes } from "../../routes";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { isAuthInitialized } = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const refreshToken = sessionStorage.getItem("refreshToken");
  const location = useLocation()
  const currentRoute = routes.find(r => r.path === location.pathname);

  const didInit = useRef(false);
  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    const tryInitRefresh = async () => {
      if (!isAuthInitialized) {
        await dispatch(refreshAuth());
      }
    }
    tryInitRefresh()
  }, []);

  if (currentRoute?.isPrivate && !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  if (currentRoute?.isGuest && refreshToken) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};
