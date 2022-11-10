import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./games/gamesSlice";
import platformSlice from "./platforms/platformSlice";
import gameSlice from "./game/gameSlice";

export const store = configureStore({
  reducer: {
    games: gamesSlice,
    platforms: platformSlice,
    game: gameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
