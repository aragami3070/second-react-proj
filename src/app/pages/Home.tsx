import { Button, SvgIcon, Typography } from "@mui/material";
import Icon from "../assets/icon.svg?react"
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { Img } from "@/shared/ui/Img";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <GridBackGroundLayout sx={{ minWidth: '100vw' }}>
        <SvgIcon component={Icon} inheritViewBox
          sx={{
            width: 100,
            height: 100,
            fontSize: 'inherit',
            flexShrink: 0,
            color: "#FFFFFF"
          }} />
        <Typography variant="h2" sx={{ padding: 2 }}>
          Добро пожаловать в &lt;Цитаты Дня&gt;!
        </Typography>
        <Typography variant="h4" sx={{ padding: 2, paddingBottom: 8 }}>
          Ваши любимые мемные цитаты из фильмов и сериалов.
        </Typography>
        <Button
          component={Link}
          href="/profile"
          sx={{
            borderRadius: "12px",
            px: 2.5,
            boxShadow: 3,
            color: "text.primary",
            background: "primary.main"
          }}>
          Начать!
        </Button>
      </GridBackGroundLayout>


      <GridBackGroundLayout sx={{ minWidth: '100vw' }}>
        <Typography variant="h2" sx={{ padding: 2 }}>
          Лента цитат
        </Typography>
        <Img src={"feed.png"} />
      </GridBackGroundLayout>

      <GridBackGroundLayout sx={{ minWidth: '100vw' }}>
        <Typography variant="h2" sx={{ padding: 2 }}>
          Лучшие цитаты
        </Typography>
        <Img src={"best-random.png"} />
      </GridBackGroundLayout>
    </>
  );
}
