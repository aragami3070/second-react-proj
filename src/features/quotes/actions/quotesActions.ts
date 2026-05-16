import { quotesApi } from "@/shared/api/quotesApi";
import { asyncHandler } from "@/shared/utils/asyncHandler";

export const createQuoteAction = async (quoteText: string) => {
  return asyncHandler(
    async () => {
      await quotesApi.createQuote(quoteText);
    },
  )
}
