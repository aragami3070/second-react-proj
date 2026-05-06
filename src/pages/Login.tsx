import type { SubmitHandler } from "react-hook-form";
import { login } from "../store/user";
import { useAppDispatch } from "../store/hooks";
import type { AuthFieldConfig } from "../components/AuthTemplatePage";
import AuthTemplatePage from "../components/AuthTemplatePage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const isUserLoaded = useSelector((state: RootState) => state.user.isUserLoaded);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    await dispatch(login({
      email: data.email,
      password: data.password
    }));

    if (isAuth && isUserLoaded) {
      navigate("/profile")
    }
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
