"use client";
import type { SubmitHandler } from "react-hook-form";
import type { AuthFieldConfig } from "@/features/auth/ui/AuthTemplatePage";
import AuthTemplatePage from "@/features/auth/ui/AuthTemplatePage";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import { StoreLocator } from "@/shared/store";
import { observer } from "mobx-react-lite";

export default observer(function RegisterPage() {
  const router = useRouter();
  const { isAuth, isUserLoaded } = StoreLocator.get().user.sync;

  useEffect(() => {
    if (isAuth && isUserLoaded) {
      router.push("/profile")
    }
  }, [isAuth, isUserLoaded])

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data: RegisterFormValues) => {
    const { register } = StoreLocator.get().user.async;
    await register({
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
});

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
