import { StateCreator } from 'zustand';

export type SettingsState = {
  isLoading: boolean;
  isErrorModalOpen: boolean;
  error: string | null;
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: string) => void;
  clearError: () => void;
};

export const createSettingsSlice: StateCreator<SettingsState> = (set) => ({
  isLoading: false,
  isErrorModalOpen: false,
  error: null,

  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),
  setError: (error: string) => set({ error, isErrorModalOpen: true }),
  clearError: () => set({ error: null, isErrorModalOpen: false }),
});
