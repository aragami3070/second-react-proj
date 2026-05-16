"use client";
import { useEffect } from "react";
import { Box, Pagination, Stack } from "@mui/material";
import { QuoteCard } from "@/entities/quote/ui/QuoteCard";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { useAppStore } from "@/shared/store";
import { useShallow } from "zustand/shallow";
import { fetchQuotesAction } from "@/features/quotes/actions/quotesActions";


export const QuotesPage = () => {
  const { quotes, offset, limit, total } = useAppStore(
    useShallow((state) => ({
      quotes: state.quotes,
      offset: state.offset,
      limit: state.limit,
      total: state.total
    }))
  );

  const page = Math.floor(offset / limit) + 1;
  const pageCount = Math.ceil(total / limit);

  useEffect(() => {
    const getQuotes = async () => {
      await fetchQuotesAction(offset, limit);
    };
    getQuotes()
  }, []);

  const handlePageChange = async (_: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = (value - 1) * limit;
    await fetchQuotesAction(newOffset, limit);
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
