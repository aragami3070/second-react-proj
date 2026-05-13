import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/shared/theme/theme';
import { CommonWrapper } from '@/widgets/CommonWrapper/CommonWrapper';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <CommonWrapper>
              {children}
            </CommonWrapper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
