import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { Game } from "./gamesSlice";

export const getAllGames = (store: RootState) => store.games;
export const getFilters = (store: RootState) => store.games;
export const getSearch = (store: RootState) => store.games;
export const getError = (store: RootState) => store.games;
export const getLoading = (store: RootState) => store.games;
export const getSearchResults = (store: RootState) => store.games;
export const getSortDirectionByDate = (store: RootState) => store.games;
export const getSortDirectionByRating = (store: RootState) => store.games;

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
export const selectSortDirectionByDate = createSelector(
  getSortDirectionByDate,
  (games) => games.sortingDateDesc
);
export const selectSortDirectinByRating = createSelector(
  getSortDirectionByRating,
  (games) => games.sortingRatingDesc
);
export const selectSearch = createSelector(getSearch, (games) => games.search);
export const selectError = createSelector(getError, (game) => game.error);

export const selectResearchResults = createSelector(
  getSearchResults,
  (game) => game.searchCounter
);

export const selectGamesByFilter = createSelector(
  [
    selectAllGames,
    selectFilters,
    selectSortDirectionByDate,
    selectSortDirectinByRating,
  ],
  (allGames, activeFilter, sortDirectionByDate, sortDirectionByRating) => {
    // const arraySortedByDate = [...allGames].sort((a, b) => {
    //   const objA = new Date(a.released);
    //   const objB = new Date(b.released);
    //   return sortDirectionByDate
    //     ? objB.getTime() - objA.getTime()
    //     : objA.getTime() - objB.getTime();
    // });
    // if (activeFilter.slug === "") {
    //   return allGames;
    // }
    // if (activeFilter.slug !== "") {
    //   const newArr: Game[] = [];
    //   allGames.forEach((el) =>
    //     el.parent_platforms.forEach((item) => {
    //       if (item.platform.slug === activeFilter.slug) {
    //         newArr.push(el);
    //       }
    //     })
    //   );
    //   return newArr;
    // }
    return allGames;
  }
);
