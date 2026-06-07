import { SettingsState } from './settingsState';

export class SettingsSync {
  constructor(private state: SettingsState) { }

  startLoading = (): void => {
    this.state.isLoading = true;
  }

  stopLoading = (): void => {
    this.state.isLoading = false;
  }

  setError = (error: string): void =>  {
    this.state.error = error;
    this.state.isErrorModalOpen = true;
  }

  clearError = (): void => {
    this.state.error = null;
    this.state.isErrorModalOpen = false;
  }
}
