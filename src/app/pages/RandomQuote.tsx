'use client'
import { useEffect } from "react";
import { Stack, Button } from "@mui/material";
import { QuoteCard } from "@/entities/quote/ui/QuoteCard";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { StoreLocator } from "@/shared/store";
import { observer } from "mobx-react-lite";

export const RandomQuotePage = observer(() => {
  const randomQuote = StoreLocator.get().quote.state.randomQuote;
  const { fetchRandomQuote } = StoreLocator.get().quote.async;

  const getRandomQuote = async () => {
    await fetchRandomQuote();
  };

  useEffect(() => {
    getRandomQuote()
  }, []);

  return (
    <GridBackGroundLayout>
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", py: 4 }}
      >
        {randomQuote && <QuoteCard quote={randomQuote} />}

        <Button variant="contained" onClick={getRandomQuote}>
          Удиви меня
        </Button>
      </Stack>
    </GridBackGroundLayout>
  );
});
