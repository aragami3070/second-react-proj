"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/shared/theme/theme';
import { CommonWrapper } from '@/widgets/CommonWrapper/CommonWrapper';
import { useEffect, useState } from 'react';
import { ColorModeContext } from '@/shared/theme/types';
import { CssBaseline, useMediaQuery } from '@mui/material';


export default function MainLayout({ children }: { children: React.ReactNode }) {
  // Узнаем системную тему
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');

    if (saved !== null) {
      // Если уже была нажата на кнопка => пользователь выбирал тему - ставим её
      setIsDark(JSON.parse(saved));
    } else {
      // Если выбора в localStorage нет - используем системную тему браузера
      setIsDark(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <CssBaseline />
          <CommonWrapper>
            {children}
          </CommonWrapper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
}
