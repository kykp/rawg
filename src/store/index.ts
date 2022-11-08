import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./games/gamesSlice";
import platformSlice from "./platforms/platformSlice";

export const store = configureStore({
  reducer: {
    games: gamesSlice,
    platforms: platformSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
