"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/shared/theme/theme';
import { CommonWrapper } from '@/widgets/CommonWrapper/CommonWrapper';
import { useEffect, useState } from 'react';
import { ColorModeContext } from '@/shared/theme/types';
import { CssBaseline } from '@mui/material';


export default function MainLayout({ children }: { children: React.ReactNode }) {
  // Загружаем из localStorage при старте, по умолчанию true
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev: boolean) => !prev)
  }

  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <CommonWrapper>
            {children}
          </CommonWrapper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
