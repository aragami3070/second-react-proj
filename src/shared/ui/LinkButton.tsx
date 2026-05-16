"use client";

import { Button, type ButtonProps } from "@mui/material";
import Link from "next/link";

type LinkButtonProps = ButtonProps & {
  href: string;
};

export const LinkButton = ({ href, children, ...props }: LinkButtonProps) => {
  return (
    <Button
      component={Link}
      href={href}
      sx={(theme) => {
        return {
          borderRadius: "12px",
          px: 2.5,
          boxShadow: 3,
          color: theme.palette.text.primary,
          background: theme.palette.primary.main
        }
      }} {...props}>
      {children}
    </Button>
  );
};
