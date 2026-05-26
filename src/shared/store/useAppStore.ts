import { useStore } from 'zustand';
import type { RootState } from './types';
import { rootStore } from './rootStore';

export function useAppStore<T>(selector: (state: RootState) => T): T {
  return useStore(rootStore.store, selector);
}
