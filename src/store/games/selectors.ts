import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const getAllGames = (store: RootState) => store.games;
export const getFilters = (store: RootState) => store.games;
export const getSearch = (store: RootState) => store.games;
export const getError = (store: RootState) => store.games;
export const getLoading = (store: RootState) => store.games;
export const getSearchResults = (store: RootState) => store.games;
export const getSortDirection = (store: RootState) => store.games;
export const getSortingByDate = (store: RootState) => store.games;
export const getSortingByRating = (store: RootState) => store.games;
export const getOrdering = (store: RootState) => store.games;

export const selectAllGames = createSelector(
  getAllGames,
  (games) => games.games
);
export const selectFilters = createSelector(
  getFilters,
  (games) => games.filter
);
export const selectLoading = createSelector(
  getLoading,
  (games) => games.loading
);
export const selectSortDirection = createSelector(
  getSortDirection,
  (games) => games.isSortingDec
);
export const selectSortingByDate = createSelector(
  getSortingByDate,
  (games) => games.sortingByDate
);
export const selectSortingByRating = createSelector(
  getSortingByRating,
  (games) => games.sortingByRating
);
export const selectOrdering = createSelector(
  getOrdering,
  (games) => games.requestOrdering
);
export const selectSearch = createSelector(getSearch, (games) => games.search);
export const selectError = createSelector(getError, (games) => games.error);

export const selectResearchResults = createSelector(
  getSearchResults,
  (game) => game.searchCounter
);

export const selectGamesByFilter = createSelector(
  [selectAllGames],
  (allGames) => {
    return allGames;
  }
);
