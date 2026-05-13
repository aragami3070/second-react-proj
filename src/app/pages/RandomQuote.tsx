'use client'
import { useEffect } from "react";
import { Stack, Button } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { fetchRandomQuote } from "../store/quote/thunks";
import { QuoteCard } from "@/entities/quote/ui/QuoteCard";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { useAppStore } from "@/shared/store";

export function RandomQuotePage() {
  const dispatch = useAppDispatch();

  const randomQuote = useAppStore((state) => state.randomQuote);

  useEffect(() => {
    const getRandomQuote = async () => {
      await dispatch(fetchRandomQuote());
    };
    getRandomQuote()
  }, [dispatch]);

  const handleRefresh = async () => {
    await dispatch(fetchRandomQuote());
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
          Удиви меня.
        </Button>
      </Stack>
    </GridBackGroundLayout>
  );
};
