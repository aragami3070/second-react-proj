import { makeAutoObservable } from 'mobx';
import type { SettingsState } from './settingsState';

export class SettingsSync {
  constructor(private state: SettingsState) {
    makeAutoObservable(this);
  }

  get isLoading(): boolean {
    return this.state.isLoading;
  }

  get isErrorModalOpen(): boolean {
    return this.state.isErrorModalOpen;
  }

  get error(): string | null {
    return this.state.error;
  }

  clearError(): void {
    this.state.clearError();
  }
}
