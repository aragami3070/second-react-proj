"use client";
import { alpha, Box, BoxProps, Container } from "@mui/material";

export type GridBackGroundLayoutProps = BoxProps & {
  children: React.ReactNode;
};
export const GridBackGroundLayout = ({ children, sx, ...props }: GridBackGroundLayoutProps) => {
  return (
    <Box sx={[(theme) => {
      const gridColor = alpha(theme.palette.divider, 0.19);
      return {
        backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
        backgroundSize: "40px 40px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    },
    ...(Array.isArray(sx) ? sx : [sx])
    ]} {...props}>
      <Container maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {children}
      </Container>
    </Box>
  )
}
