"use client";
import { Typography } from "@mui/material";
import { LinkButton } from "./LinkButton";
import { GridBackGroundLayout } from "./GridBackGroundLayout";

export const PageNotFound = () => {
  return (
    <GridBackGroundLayout>
      <Typography variant="h1" color="primary" sx={{p: 2}}>404.</Typography>
      <Typography variant="h5" color="text.secondary" sx={{pb: 2}}>Кажется, такой страницы не существует.</Typography>
      <LinkButton href="/" variant="contained" sx={{ mt: 2 }}>
        Вернуться на главную
      </LinkButton>
    </GridBackGroundLayout>
  );
};
