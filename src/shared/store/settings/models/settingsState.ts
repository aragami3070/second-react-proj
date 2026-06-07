import { makeAutoObservable } from 'mobx';

export class SettingsState {
  isLoading = false;
  isErrorModalOpen = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }
}
