"use client";
import { useEffect } from "react";
import { Box, Pagination, Stack } from "@mui/material";
import { QuoteCard } from "@/entities/quote/ui/QuoteCard";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { useShallow } from "zustand/shallow";
import { StoreLocator } from "@/shared/store";
import { useStore } from "zustand";


export const QuotesPage = () => {
  const store = StoreLocator.get().store;
  const { quotes, offset, limit, total } = useStore(store,
    useShallow((state) => ({
      quotes: state.quote.quotes,
      offset: state.quote.offset,
      limit: state.quote.limit,
      total: state.quote.total
    }))
  );
  const { fetchQuotes } = StoreLocator.get().quote.async;

  const page = Math.floor(offset / limit) + 1;
  const pageCount = Math.ceil(total / limit);

  useEffect(() => {
    const getQuotes = async () => {
      await fetchQuotes(offset, limit);
    };
    getQuotes()
  }, []);

  const handlePageChange = async (_: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = (value - 1) * limit;
    await fetchQuotes(newOffset, limit);
  };

  return (
    <GridBackGroundLayout>
      <Stack
        spacing={3}
        alignItems="center"
        sx={{ width: "100%", py: 4, mt: 10 }}
      >
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}

        <Box mt={2}>
          <Pagination
            page={page}
            count={pageCount}
            onChange={handlePageChange}
          />
        </Box>
      </Stack>
    </GridBackGroundLayout>
  );
};
