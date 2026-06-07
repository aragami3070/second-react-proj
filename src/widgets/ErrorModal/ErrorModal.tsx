"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import { useShallow } from "zustand/shallow";
import { StoreLocator } from "@/shared/store";
import { useStore } from "zustand";

export const ErrorModal = () => {
  const store = StoreLocator.get().store;
  const { error, isErrorModalOpen } = useStore(store,
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
