import type { StoreApi } from 'zustand/vanilla';
import type { RootState } from '../../types';

export class SettingsSync {
  constructor(private store: StoreApi<RootState>) { }

  startLoading = (): void => {
    this.store.setState((prev) => ({
      settings: { ...prev.settings, isLoading: true }
    }));
  }

  stopLoading = (): void => {
    this.store.setState((prev) => ({
      settings: { ...prev.settings, isLoading: false }
    }));
  }

  setError = (error: string): void =>  {
    this.store.setState((prev) => ({
      settings: { ...prev.settings, error, isErrorModalOpen: true }
    }));
  }

  clearError = (): void => {
    this.store.setState((prev) => ({
      settings: { ...prev.settings, error: null, isErrorModalOpen: false }
    }));
  }
}
