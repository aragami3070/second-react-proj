import RegisterPage from "@/app/pages/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Создайте аккаунт в проекте «Цитаты Дня» и присоединяйтесь к сообществу ценителей мемов из кино и сериалов.",
  openGraph: {
    title: "Регистрация | Цитаты Дня",
    description: "Создайте аккаунт в проекте «Цитаты Дня» и присоединяйтесь к сообществу.",
  }
};

export default function Page() {
  return <RegisterPage />
}
