import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { Game } from "./gamesSlice";

export const getAllGames = (store: RootState) => store.games;
export const getFilters = (store: RootState) => store.games;
export const getSearch = (store: RootState) => store.games;

export const selectAllGames = createSelector(
  getAllGames,
  (games) => games.games
);

export const selectFilters = createSelector(
  getFilters,
  (games) => games.filter
);

export const selectSearch = createSelector(getSearch, (games) => games.search);

export const selectGamesByFilter = createSelector(
  [selectAllGames, selectFilters],
  (allGames, activeFilter) => {
    if (activeFilter.slug === "") return allGames;

    const newArr: Game[] = [];

    allGames.forEach((el) =>
      el.parent_platforms.forEach((item) => {
        if (item.platform.slug === activeFilter.slug) {
          newArr.push(el);
        }
      })
    );
    return newArr;
  }
);
