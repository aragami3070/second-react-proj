import { create } from 'zustand';
import { createSettingsSlice, type SettingsState } from './settingsSlice';
import { createQuoteSlice, type QuoteState } from './quoteSlice';
import { createUserSlice, type UserState } from './userSlice';

export type RootState = SettingsState & QuoteState & UserState;

export const useAppStore = create<RootState>()((...a) => ({
  ...createSettingsSlice(...a),
  ...createQuoteSlice(...a),
  ...createUserSlice(...a),
}));
