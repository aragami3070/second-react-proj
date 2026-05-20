import { QuotesPage } from "@/app/pages/Quotes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лента цитат",
  description: "Просматривайте самые свежие и смешные цитаты, добавленные нашим сообществом.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <QuotesPage />
}
