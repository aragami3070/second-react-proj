import { quotesApi } from "@/shared/api/quotesApi";
import { useAppStore } from "@/shared/store";
import { asyncHandler } from "@/shared/utils/asyncHandler";

export const createQuoteAction = async (quoteText: string) => {
  return asyncHandler(
    async () => {
      await quotesApi.createQuote(quoteText);
    },
  )
}

export const fetchQuotesCountAction = async () => {
  const { setTotal } = useAppStore.getState();
  return asyncHandler(
    async () => {
      setTotal((await quotesApi.fetchQuotesCount()).data)
    },
  )
}
