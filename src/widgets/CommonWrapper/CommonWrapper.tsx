"use client";
import type { ReactNode } from "react";
import { CircularProgress, Box } from "@mui/material";
import { ErrorModal } from "@/widgets/ErrorModal/ErrorModal";
import { StoreLocator } from "@/shared/store";
import { observer } from "mobx-react-lite";


export const CommonWrapper = observer(({ children }: { children: ReactNode }) => {
  const isLoading = StoreLocator.get().settings.state.isLoading;

  return (
    <Box sx={{ position: "relative" }}>
      <ErrorModal />
      <Box
        sx={{
          filter: isLoading ? "blur(4px)" : "none",
          pointerEvents: isLoading ? "none" : "auto",
          transition: "0.3s",
        }}
      >
        {children}
      </Box>

      {isLoading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(2px)",
            zIndex: 10,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
});
