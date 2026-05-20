import ProfilePage from "@/app/pages/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Личный кабинет",
  description: "Управление вашим профилем.",
  robots: {
    index: false, // Запрещаем Google показывать эту страницу в поиске
    follow: false, // Запрещаем роботам переходить по ссылкам с этой страницы
  },
};

export default function Page() {
  // throw new Error("Тестовая ошибка");
  return <ProfilePage />
}
