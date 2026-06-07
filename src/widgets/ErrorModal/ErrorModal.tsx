"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import { StoreLocator } from "@/shared/store";
import { observer } from "mobx-react-lite";

export const ErrorModal = observer(() => {
  const { error, isErrorModalOpen } = StoreLocator.get().settings.state;

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
});
