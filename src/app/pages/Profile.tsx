'use client';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  Button
} from "@mui/material"
import { useAppStore } from "@/shared/store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GridBackGroundLayout } from "@/shared/ui/GridBackGroundLayout"
import { logoutAction } from "@/features/auth/actions/authActions"

export default function ProfilePage() {
  const user = useAppStore((state) => state.user);
  const router = useRouter();

  if (!user) {
    return (
      <GridBackGroundLayout >
        <Typography>Пользователь не найден</Typography>
      </GridBackGroundLayout>
    )
  }

  const handleLogout = () => {
    logoutAction();
    router.push("/login");
  }

  return (
    <GridBackGroundLayout >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 4,
            boxShadow: 3
          }}
        >
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={2}
            >
              <Avatar sx={(theme) => {
                return {
                  width: 80,
                  height: 80,
                  mb: 1,
                  background: theme.palette.secondary.main,
                }
              }}>
                {user.firstName?.[0]}
              </Avatar>

              <Typography variant="h5">
                {user.firstName} {user.secondName}
              </Typography>

              <Typography color="text.secondary">
                {user.email}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography>
                <b>ID:</b> {user.id}
              </Typography>

              <Typography>
                <b>Имя:</b> {user.firstName}
              </Typography>

              <Typography>
                <b>Фамилия:</b> {user.secondName}
              </Typography>

              <Typography>
                <b>Почта:</b> {user.email}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box display="flex" justifyContent="space-between">
              <Button
                variant="contained"
                key={"/"}
                component={Link}
                href={"/"}
              >
                На главную
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
              >
                Выйти
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </GridBackGroundLayout>
  )
}
