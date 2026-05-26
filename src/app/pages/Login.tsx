"use client";
import type { SubmitHandler } from "react-hook-form";
import type { AuthFieldConfig } from "@/features/auth/ui/AuthTemplatePage";
import AuthTemplatePage from "@/features/auth/ui/AuthTemplatePage";
import { useAppStore } from "@/shared/store/useAppStore";
import { StoreLocator } from '@/shared/store/rootStore';
import { useRouter } from "next/navigation"
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { isAuth, isUserLoaded } = useAppStore(
    useShallow((state) => ({
      isAuth: state.user.isAuth,
      isUserLoaded: state.user.isUserLoaded
    }))
  );

  useEffect(() => {
    if (isAuth && isUserLoaded) {
      router.push("/profile")
    }
  }, [isAuth, isUserLoaded])

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const { login } = StoreLocator.get().user.async;
    await login({
      email: data.email,
      password: data.password
    });

  };

  return (
    <>
      <AuthTemplatePage
        title="Вход"
        fields={fields}
        onSubmit={onSubmit}
        submitButtonText="Войти в аккаунт"
        switchTo="/register"
        switchLinkText="Зарегистрироваться"
        switchText="Нет аккаунта?"
      />
    </>
  );
}

type LoginFormValues = {
  email: string;
  password: string;
};

const fields: AuthFieldConfig<LoginFormValues>[] = [
  {
    name: "email",
    label: "Почта",
    type: "email",
    rules: {
      required: "Введите почту",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Некорректный почта",
      },
    },
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    rules: {
      required: "Введите пароль",
      minLength: {
        value: 16,
        message: "Минимум 16 символов",
      },
    }
  }
]
