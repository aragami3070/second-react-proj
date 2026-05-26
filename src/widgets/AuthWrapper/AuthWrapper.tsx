"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { useAppStore } from "@/shared/store/useAppStore";
import { guestRoutes, privateRoutes } from "@/shared/config/nav";
import { StoreLocator } from "@/shared/store/rootStore";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const isAuthInitialized = useAppStore((state) => state.user.isAuthInitialized);
  const router = useRouter();
  const pathname = usePathname();

  // Флаг монтирования, чтобы избежать ошибки гидратации (SSR)
  const [isMounted, setIsMounted] = useState(false);
  const didInit = useRef(false);

  // Эффект первичной инициализации авторизации
  useEffect(() => {
    setIsMounted(true); // Компонент отрендерился в браузере

    if (didInit.current) return;
    didInit.current = true;

    const tryInitRefresh = async () => {
      if (!isAuthInitialized) {
        const { refreshOnStart } = StoreLocator.get().user.async;
        await refreshOnStart();
      }
    };
    tryInitRefresh();
  }, [isAuthInitialized]);

  const isPrivate = privateRoutes.includes(pathname ?? "");
  const isGuest = guestRoutes.includes(pathname ?? "");

  // Эффект для редиректов
  useEffect(() => {
    if (!isMounted) return; // Ждем окончания SSR

    const refreshToken = sessionStorage.getItem("refreshToken");
    if (isPrivate && !refreshToken) {
      router.push("/login");
    } else if (isGuest && refreshToken) {
      router.push("/profile");
    }
  }, [isMounted, pathname, router]);

  const refreshToken = typeof window !== "undefined"
    ? sessionStorage.getItem("refreshToken")
    : null;

  // Пока идет SSR или перенаправление блокируем показ приватного контента
  if (!isMounted || (isPrivate && !refreshToken) || (isGuest && refreshToken)) {
    return null;
  }

  return <>{children}</>;
};
