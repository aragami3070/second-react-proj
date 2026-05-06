import CreateQuote from "./pages/CreateQuote"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { QuotesPage } from "./pages/Quotes"
import { RandomQuotePage } from "./pages/RandomQuote"
import Register from "./pages/Register"

export interface RouteConfig {
  label: string
  path: string
  element: React.ReactNode
  isPrivate?: boolean,
  isGuest?: boolean,
}

export const navRouters: RouteConfig[] = [
  { label: "Главная", path: "/", element: <Home /> },
  { label: "Профиль", path: "/profile", element: <Profile />, isPrivate: true },
  { label: "Создать цитату", path: "/create-quote", element: <CreateQuote />, isPrivate: true },
  { label: "Лента цитат", path: "/quotes", element: <QuotesPage />, isPrivate: true },
  { label: "Лучшее", path: "/random-quotes", element: <RandomQuotePage />, isPrivate: true },
]

export const routes: RouteConfig[] = [
  { label: "Регистрация", path: "/register", element: <Register />, isGuest: true },
  { label: "Вход", path: "/login", element: <Login />, isGuest: true },
  ...navRouters
]
