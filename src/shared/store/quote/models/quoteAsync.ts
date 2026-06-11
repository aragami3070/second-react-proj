import { quotesApi } from "@/shared/api/quotesApi";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import type { QuoteState } from "./quoteState";
import { makeAutoObservable } from "mobx";

export class QuoteAsync {
  constructor(private state: QuoteState) {
    makeAutoObservable(this);
  }

  createQuote = async (quoteText: string) => {
    return asyncHandler(
      async () => {
        await quotesApi.createQuote(quoteText);
      }
    );
  };

  fetchQuotesCount = async () => {
    return asyncHandler(
      async () => {
        const res = await quotesApi.fetchQuotesCount();
        this.state.setTotal(res.data);
      }
    );
  };

  fetchQuotes = async (offset: number, limit: number) => {
    return asyncHandler(
      async () => {
        const res = await quotesApi.fetchQuotes(offset, limit);
        this.state.setQuotes(res.data, offset);

        await this.fetchQuotesCount();
      }
    );
  };

  fetchRandomQuote = async () => {
    return asyncHandler(
      async () => {
        const res = await quotesApi.fetchRandomQuote();
        this.state.setRandomQuote(res.data);
      }
    );
  };
}
