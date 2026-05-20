import LoginPage from "@/app/pages/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход",
  description: "Войдите в свой аккаунт, чтобы сохранять любимые мемные цитаты и делиться ими с друзьями.",
  openGraph: {
    title: "Вход | Цитаты Дня",
    description: "Войдите в свой аккаунт, чтобы сохранять любимые мемные цитаты.",
  }
};

export default function Page() {
  return <LoginPage />
}
