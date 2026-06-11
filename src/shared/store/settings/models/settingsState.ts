import { makeAutoObservable } from 'mobx';

export class SettingsState {
  isLoading = false;
  isErrorModalOpen = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(value: boolean): void {
    this.isLoading = value;
  }

  setError(error: string): void {
    this.error = error;
    this.isErrorModalOpen = true;
  }

  clearError(): void {
    this.error = null;
    this.isErrorModalOpen = false;
  }
}
