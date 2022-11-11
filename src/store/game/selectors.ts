import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const getCurrentGame = (store: RootState) => store.game;
export const getCurrentScreenshots = (store: RootState) => store.game;
export const getLoading = (store: RootState) => store.game;

export const selectLoading = createSelector(getLoading, (game) => game.loading);
export const selectCurrentGame = createSelector(
  getCurrentGame,
  (game) => game.currentGame
);
export const selectCurrentScreenshots = createSelector(
  getCurrentGame,
  (game) => game.currentGameScreens
);
