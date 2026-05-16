'use client'
import { useEffect } from "react";
import { Stack, Button } from "@mui/material";
import { QuoteCard } from "@/entities/quote/ui/QuoteCard";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { useAppStore } from "@/shared/store";
import { fetchRandomQuoteAction } from "@/features/quotes/actions/quotesActions";

export function RandomQuotePage() {
  const randomQuote = useAppStore((state) => state.randomQuote);

  useEffect(() => {
    const getRandomQuote = async () => {
      await fetchRandomQuoteAction();
    };
    getRandomQuote()
  }, []);

  const handleRefresh = async () => {
    await fetchRandomQuoteAction();
  };

  return (
    <GridBackGroundLayout>
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", py: 4 }}
      >
        {randomQuote && <QuoteCard quote={randomQuote} />}

        <Button variant="contained" onClick={handleRefresh}>
          Удиви меня
        </Button>
      </Stack>
    </GridBackGroundLayout>
  );
};
