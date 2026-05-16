"use client";
import type { SubmitHandler } from "react-hook-form";
import type { AuthFieldConfig } from "@/features/auth/ui/AuthTemplatePage";
import AuthTemplatePage from "@/features/auth/ui/AuthTemplatePage";
import { useRouter } from "next/navigation"
import { useAppStore } from "@/shared/store";
import { registerAction } from "@/features/auth/actions/authActions";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuth, isUserLoaded } = useAppStore(
    useShallow((state) => ({
      isAuth: state.isAuth,
      isUserLoaded: state.isUserLoaded
    }))
  );

  useEffect(() => {
    if (isAuth && isUserLoaded) {
      router.push("/profile")
    }
  }, [isAuth, isUserLoaded])

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data: RegisterFormValues) => {
    await registerAction({
      firstName: data.firstName,
      secondName: data.secondName,
      email: data.email,
      password: data.password
    });
  };

  return (
    <>
      <AuthTemplatePage
        title="Регистрация"
        fields={fields}
        onSubmit={onSubmit}
        submitButtonText="Создать аккаунт"
        switchTo="/login"
        switchLinkText="Войти"
        switchText="Есть аккаунт?"
      />
    </>
  );
}

type RegisterFormValues = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};

const fields: AuthFieldConfig<RegisterFormValues>[] = [
  {
    name: "firstName",
    label: "Имя",
    type: "text",
    rules: {
      required: "Введите Имя",
    }
  },
  {
    name: "secondName",
    label: "Фамилию",
    type: "text",
    rules: {
      required: "Введите Фамилию",
    }
  },
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
