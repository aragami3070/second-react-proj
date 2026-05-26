import { QuoteStateData } from './quote/types';
import { SettingsStateData } from './settings/types';
import { UserStateData } from './user/types';

export type RootState = {
  settings: SettingsStateData;
  user: UserStateData;
  quote: QuoteStateData;
};
