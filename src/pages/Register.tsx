import type { SubmitHandler } from "react-hook-form";
import type { AuthFieldConfig } from "../components/AuthTemplatePage";
import AuthTemplatePage from "../components/AuthTemplatePage";
import { type RootState } from "../store";
import { useAppDispatch } from "../store/hooks";
import { useSelector } from "react-redux";
import { register } from "../store/user";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const isUserLoaded = useSelector((state: RootState) => state.user.isUserLoaded);

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data: RegisterFormValues) => {
    await dispatch(register({
      firstName: data.firstName,
      secondName: data.secondName,
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
