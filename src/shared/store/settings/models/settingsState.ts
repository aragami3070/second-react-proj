import { SettingsStateData } from '../types';

export class SettingsState {
  public readonly initial: SettingsStateData = {
    isLoading: false,
    isErrorModalOpen: false,
    error: null,
  };
}

export const initSettings = new SettingsState().initial;
