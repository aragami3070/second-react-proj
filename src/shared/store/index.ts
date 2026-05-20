import { create } from 'zustand';
import { createSettingsStore, type SettingsState } from './settingsStore';
import { createQuoteStore, type QuoteState } from './quoteStore';
import { createUserStore, type UserState } from './userStore';

export type RootState = SettingsState & QuoteState & UserState;

export const useAppStore = create<RootState>()((...a) => ({
  ...createSettingsStore(...a),
  ...createQuoteStore(...a),
  ...createUserStore(...a),
}));
