import { AppBar, Toolbar, Button, Box, useTheme, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { navRouters } from "../routes";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/LightMode"
import { useAppSelector } from "../store/hooks";

export default function NavBar() {
  const { toggleTheme } = useContext(ColorModeContext);
  const isAuth = useAppSelector((state) => state.user.isAuth);

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
          {navRouters
            .filter((route) => !route.isPrivate || isAuth)
            .map((route) => (
            <Button
              key={route.path}
              component={Link}
              to={route.path}
              sx={{
                color: theme.palette.text.primary,
                background: theme.palette.background.paper
              }}
            >
              {route.label}
            </Button>
          ))}
          <IconButton onClick={toggleTheme}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
