"use client";
import { useEffect } from "react";
import { Box, Pagination, Stack } from "@mui/material";
import { QuoteCard } from "@/entities/quote/ui/QuoteCard";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { StoreLocator } from "@/shared/store";
import { observer } from "mobx-react-lite";


export const QuotesPage = observer(() => {
  const { quotes, offset, limit, total } = StoreLocator.get().quote.state;
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
});
