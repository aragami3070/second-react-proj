export const navLinks = [
  { label: "Главная", path: "/", isPrivate: false },
  { label: "Профиль", path: "/profile", isPrivate: true },
  { label: "Создать цитату", path: "/create-quote", isPrivate: true },
  { label: "Лента цитат", path: "/quotes", isPrivate: true },
  { label: "Лучшее", path: "/random-quote", isPrivate: true },
];

export const privateRoutes = ["/profile", "/create-quote", "/quotes", "/random-quote"];
export const guestRoutes = ["/login", "/register"];
