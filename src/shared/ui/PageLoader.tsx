"use client";
import { CircularProgress } from "@mui/material";
import { GridBackGroundLayout } from "./GridBackGroundLayout";

export const PageLoader = () => {
  return (
    <GridBackGroundLayout>
      <CircularProgress size={60} color="primary" />
    </GridBackGroundLayout>
  );
};
