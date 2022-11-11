import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { Game } from "./gamesSlice";

export const getAllGames = (store: RootState) => store.games;
export const getFilters = (store: RootState) => store.games;
export const getSearch = (store: RootState) => store.games;
export const getError = (store: RootState) => store.games;
export const getSearchResults = (store: RootState) => store.games;
export const getSortDirection = (store: RootState) => store.games;

export const selectAllGames = createSelector(
  getAllGames,
  (games) => games.games
);

export const selectFilters = createSelector(
  getFilters,
  (games) => games.filter
);
export const selectSortDirection = createSelector(
  getSortDirection,
  (games) => games.sortingDate
);
export const selectSearch = createSelector(getSearch, (games) => games.search);
export const selectError = createSelector(getError, (game) => game.error);

export const selectResearchResults = createSelector(
  getSearchResults,
  (game) => game.searchCounter
);

export const selectGamesByFilter = createSelector(
  [selectAllGames, selectFilters, selectSortDirection],
  (allGames, activeFilter, sortDirection) => {
    const newArray = [...allGames].sort((a, b) => {
      const objA = new Date(a.released);
      const objB = new Date(b.released);
      return sortDirection
        ? objA.getTime() - objB.getTime()
        : objB.getTime() - objA.getTime();
    });

    if (activeFilter.slug === "") {
      return newArray;
    }

    if (activeFilter.slug !== "") {
      const newArr: Game[] = [];
      newArray.forEach((el) =>
        el.parent_platforms.forEach((item) => {
          if (item.platform.slug === activeFilter.slug) {
            newArr.push(el);
          }
        })
      );
    }
  }
);
