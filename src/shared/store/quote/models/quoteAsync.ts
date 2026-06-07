import { quotesApi } from "@/shared/api/quotesApi";
import { asyncHandler } from "@/shared/utils/asyncHandler";
import type { QuoteSync } from "./quoteSync";

export class QuoteAsync {
  constructor(private sync: QuoteSync) { }

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
        this.sync.setTotal(res.data);
      }
    );
  };

  fetchQuotes = async (offset: number, limit: number) => {
    return asyncHandler(
      async () => {
        const res = await quotesApi.fetchQuotes(offset, limit);
        this.sync.setQuotes(res.data, offset);

        await this.fetchQuotesCount();
      }
    );
  };

  fetchRandomQuote = async () => {
    return asyncHandler(
      async () => {
        const res = await quotesApi.fetchRandomQuote();
        this.sync.setRandomQuote(res.data);
      }
    );
  };
}
