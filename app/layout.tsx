import AppDashboardLayout from '@/app/layouts/AppDashboard';
import MainLayout from '@/app/layouts/Main';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Цитаты Дня",
    default: "Цитаты Дня - Твои любимые мемы",
  },
  description: "Лучшая коллекция мемных цитат из фильмов и сериалов.",
  manifest: "/manifest.json",
  icons: { icon: '/icon.svg' },

  openGraph: {
    title: "Цитаты Дня",
    description: "Лучшая коллекция мемных цитат",
    url: "http://localhost:3000",
    siteName: "Quotes of the Day",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <MainLayout>
          <AppDashboardLayout>
            {children}
          </AppDashboardLayout>
        </MainLayout>
      </body>
    </html>
  )
}
