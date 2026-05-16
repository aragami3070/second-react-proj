import { Typography } from "@mui/material";
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout";
import { Img } from "@/shared/ui/Img";
import { LinkButton } from "@/shared/ui/LinkButton";

export default function HomePage() {
  return (
    <>
      <GridBackGroundLayout sx={{ minWidth: '100vw' }}>
        <Img
          src="/icon.svg"
          sx={{
            width: 100,
            height: 100,
            fontSize: 'inherit',
            flexShrink: 0,
            color: "#FFFFFF"
          }}
        />
        <Typography variant="h2" sx={{ padding: 2 }}>
          Добро пожаловать в &lt;Цитаты Дня&gt;!
        </Typography>
        <Typography variant="h4" sx={{ padding: 2, paddingBottom: 8 }}>
          Ваши любимые мемные цитаты из фильмов и сериалов.
        </Typography>
        <LinkButton
          href="/profile" >
          Начать!
        </LinkButton>
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
