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

export const fetchQuotesAction = async (
  offset: number,
  limit: number
) => {
  const { setQuotes } = useAppStore.getState();
  return asyncHandler(
    async () => {
      setQuotes(
        (await quotesApi.fetchQuotes(offset, limit)).data
        , offset
      );
      await fetchQuotesCountAction();
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
