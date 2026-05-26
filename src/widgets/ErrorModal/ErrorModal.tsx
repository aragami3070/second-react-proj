"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import { useAppStore } from "@/shared/store/useAppStore";
import { useShallow } from "zustand/shallow";
import { StoreLocator } from "@/shared/store/rootStore";

export const ErrorModal = () => {
  const { error, isErrorModalOpen } = useAppStore(
    useShallow((state) => ({
      error: state.settings.error,
      isErrorModalOpen: state.settings.isErrorModalOpen,
    }))
  );

  const handleClose = () => {
    const { clearError } = StoreLocator.get().settings.sync;
    clearError();
  };

  return (
    <Dialog
      open={isErrorModalOpen}
      onClose={handleClose}
    >
      <DialogTitle
        sx={(theme) => {
          return {
            color: theme.palette.error.main
          }
        }}
      >Ошибка</DialogTitle>
      <DialogContent>
        <Typography
          sx={(theme) => {
            return {
              color: theme.palette.error.main
            }
          }}
        >
          {error}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
