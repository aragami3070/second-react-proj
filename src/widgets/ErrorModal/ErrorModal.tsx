"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import { useAppStore } from "@/shared/store";
import { useShallow } from "zustand/shallow";

export const ErrorModal = () => {
  const { error, isErrorModalOpen, clearError } = useAppStore(
    useShallow((state) => ({
      error: state.error,
      isErrorModalOpen: state.isErrorModalOpen,
      clearError: state.clearError
    }))
  );

  const handleClose = () => {
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
