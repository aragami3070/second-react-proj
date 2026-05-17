"use client";
import { Button, Typography } from "@mui/material";
import { GridBackGroundLayout } from "./GridBackGroundLayout";

export const PageError = ({ error, resetAction }: { error: Error & { digest?: string }; resetAction: () => void }) => {
  return (
    <GridBackGroundLayout >
      <Typography variant="h3" color="error" sx={{p: 2}}>Упс! Что-то пошло не так.</Typography>
      <Typography variant="h5" color="text.secondary" sx={{pb: 2}}>{error.message}</Typography>
      <Button variant="contained" onClick={() => resetAction()}>
        Попробовать снова
      </Button>
    </GridBackGroundLayout>
  );
};
