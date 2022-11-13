import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import {
  fetchGames,
  fetchMoreGames,
  // fetchGamesByPlatform,
  // fetchMoreGamesByPlatform,
  // fetchGamesBySearch,
  // fetchMoreGamesBySearch,
  // fetchMoreGamesSortedByDateRelease,
  // fetchGamesSortingByDateRelease,
} from "./asyncActions";
import { sortingArrayByDate } from "../../helper/sortingArrayByDate";
import { sortingArrayByRating } from "../../helper/sortingArrayByRating";
export type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  parent_platforms: ParentPlatforms[];
  genres: Genres[];
};

export type ParentPlatforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

export type Genres = {
  id: number;
  name: string;
};

export type Filter = {
  id: number | null;
  slug: string;
};

export enum sortingDesc {
  true = "true",
  false = "false",
  notActive = "notActive",
}

type GamesState = {
  games: Game[];
  loading: boolean;
  error: string;
  filter: Filter;
  search: string;
  searchCounter: number | null;
  sortingDateDec: sortingDesc;
  sortingRatingDec: sortingDesc;
};

const initialState: GamesState = {
  games: [],
  filter: { id: null, slug: "" },
  loading: false,
  error: "",
  search: "",
  searchCounter: null,
  sortingDateDec: sortingDesc.notActive,
  sortingRatingDec: sortingDesc.notActive,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<{ id: number; slug: string }>) => {
      state.filter = action.payload;
    },
    addSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search;
    },
    clearError: (state) => {
      state.error = "";
    },
    clearFilter: (state) => {
      state.filter.id = null;
      state.filter.slug = "";
    },
    setSearchCounter: (state, action: PayloadAction<{ counter: number }>) => {
      state.searchCounter = action.payload.counter;
    },
    switchDateSort: (
      state,
      action: PayloadAction<{ direction: sortingDesc }>
    ) => {
      state.sortingDateDec = action.payload.direction;
    },
    switchRatingSort: (
      state,
      action: PayloadAction<{ direction: sortingDesc }>
    ) => {
      state.sortingRatingDec = action.payload.direction;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.fulfilled, (state, action) => {
        if (state.sortingDateDec !== "notActive") {
          const isSortingDec = state.sortingDateDec === "true" ? true : false;
          state.games = sortingArrayByDate(action.payload, isSortingDec);
        } else if (state.sortingRatingDec !== "notActive") {
          const isSortingDec = state.sortingRatingDec === "true" ? true : false;
          state.games = sortingArrayByRating(action.payload, isSortingDec);
        } else {
          state.games = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchMoreGames.fulfilled, (state, action) => {
        if (state.sortingDateDec !== "notActive") {
          const isSortingDec = state.sortingDateDec === "true" ? true : false;
          const sortedArray = sortingArrayByDate(action.payload, isSortingDec);
          state.games = [...state.games, ...sortedArray];
        } else if (state.sortingRatingDec !== "notActive") {
          const isSortingDec = state.sortingRatingDec === "true" ? true : false;
          const sortedArray = sortingArrayByRating(
            action.payload,
            isSortingDec
          );
          state.games = [...state.games, ...sortedArray];
        } else {
          state.games = [...state.games, ...action.payload];
        }

        state.loading = false;
      })
      .addCase(fetchMoreGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreGames.rejected, (state) => {
        state.error = "Warning";
      })
      // .addCase(fetchGamesSortingByDateRelease.fulfilled, (state, action) => {
      //   state.sortingDateDesc === sortingDesc.true
      //     ? (state.games = sortingArrayByDate(action.payload, true))
      //     : (state.games = sortingArrayByDate(action.payload, false));
      //   state.loading = false;
      // })
      // .addCase(fetchGamesSortingByDateRelease.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchGamesSortingByDateRelease.rejected, (state) => {
      //   state.error = "Warning";
      // })
      // .addCase(fetchMoreGamesSortedByDateRelease.fulfilled, (state, action) => {
      //   state.sortingDateDesc === sortingDesc.true
      //     ? (state.games = [
      //         ...state.games,
      //         ...sortingArrayByDate(action.payload, true),
      //       ])
      //     : (state.games = [
      //         ...state.games,
      //         ...sortingArrayByDate(action.payload, false),
      //       ]);
      //   state.loading = false;
      // })
      // .addCase(fetchMoreGamesSortedByDateRelease.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchMoreGamesSortedByDateRelease.rejected, (state) => {
      //   state.error = "Warning";
      // })

      // .addCase(fetchMoreGamesByPlatform.fulfilled, (state, action) => {
      //   state.games = [...state.games, ...action.payload];
      //   state.loading = false;
      // })
      // .addCase(fetchMoreGamesByPlatform.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchMoreGamesByPlatform.rejected, (state) => {
      //   state.error = "Warning";
      // })
      // .addCase(fetchGamesBySearch.fulfilled, (state, action) => {
      //   state.games = action.payload;
      //   state.loading = false;
      // })
      // .addCase(fetchGamesBySearch.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchGamesBySearch.rejected, (state) => {
      //   state.error = "Warning";
      // })
      // .addCase(fetchMoreGamesBySearch.fulfilled, (state, action) => {
      //   state.games = [...state.games, ...action.payload];
      //   state.loading = false;
      // })
      // .addCase(fetchMoreGamesBySearch.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchMoreGamesBySearch.rejected, (state) => {
      //   state.error = "Warning";
      // })
      // .addCase(fetchGamesByPlatform.fulfilled, (state, action) => {
      //   state.games = action.payload;
      //   state.loading = false;
      // })
      // .addCase(fetchGamesByPlatform.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchGamesByPlatform.rejected, (state) => {
      //   state.error = "Warning";
      // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {
  addFilter,
  addSearch,
  clearError,
  clearFilter,
  setSearchCounter,
  switchDateSort,
  switchRatingSort,
} = gamesSlice.actions;

export default gamesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
