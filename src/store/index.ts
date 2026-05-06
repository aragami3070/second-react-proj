import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice"
import settingsReducer from "./settings/slice"
import quoteReducer from "./quote/slice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
    quotes: quoteReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
