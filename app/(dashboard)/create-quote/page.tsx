import CreateQuote from "@/app/pages/CreateQuote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создать цитату",
  description: "Добавьте свою любимую мемную фразу из фильма или сериала в общую ленту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <CreateQuote />
}
