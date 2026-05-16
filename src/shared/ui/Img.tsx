import { Box, BoxProps } from "@mui/material";

export type ImgProps = BoxProps<"img"> & {
  src: string;
  alt?: string;
};

export function Img({ src, alt = "", sx, ...props }: ImgProps) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={[
        {
          width: '100%',
          maxWidth: 1000,
          borderRadius: 3,
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...props}
    />
  );
}
