import AppDashboardLayout from '@/app/layouts/AppDashboard';
import MainLayout from '@/app/layouts/Main';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
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
