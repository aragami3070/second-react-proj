import { Quote } from '@/entities/quote/types';
import api from './axios';

export const quotesApi = {
  createQuote: (quoteText: string) =>
    api.post<Quote>(
      "/Quote",
      null,
      { params: { quoteText } }
    ),
};
;
