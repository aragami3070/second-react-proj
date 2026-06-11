"use client";
import { AppBar, Toolbar, Button, Box, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { ColorModeContext } from "@/shared/theme/types";
import { usePathname } from "next/navigation";
import { navLinks } from "@/shared/config/nav";
import { StoreLocator } from "@/shared/store";
import { observer } from "mobx-react-lite";

export default observer(function NavBar() {
  const { toggleTheme } = useContext(ColorModeContext);
  const isAuth = StoreLocator.get().user.sync.isAuth;

  const pathname = usePathname();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        top: "20px",
        zIndex: 1000
      }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: "12px",
          background: theme.palette.background.paper,
          px: 0.5,
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {navLinks
            .filter((link) => !link.isPrivate || isAuth)
            .map((link) => {
              const isActive = pathname === link.path;
              return (
                <Button
                  key={link.path}
                  component={Link}
                  href={link.path}
                  sx={{
                    color: isActive ? theme.palette.secondary.main : theme.palette.text.primary,
                    background: theme.palette.background.paper
                  }}
                >
                  {link.label}
                </Button>
              )
            })}
          <IconButton onClick={toggleTheme}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
