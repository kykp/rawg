import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchGames, fetchMoreGames } from "./asyncActions";
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

export enum EOrdering {
  undefined = "",
  released = "released",
  rating = "rating",
}

type GamesState = {
  games: Game[];
  loading: boolean;
  error: string;
  filter: Filter;
  search: string;
  searchCounter: number | null;
  requestOrdering: EOrdering;
  isSortingDec: boolean;
  sortingByDate: boolean;
  sortingByRating: boolean;
};

const initialState: GamesState = {
  games: [],
  filter: { id: null, slug: "" },
  loading: false,
  error: "",
  search: "",
  searchCounter: null,
  requestOrdering: EOrdering.undefined,
  isSortingDec: false,
  sortingByDate: false,
  sortingByRating: false,
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
    switchSortingByDate: (
      state,
      action: PayloadAction<{ active: boolean }>
    ) => {
      state.sortingByDate = action.payload.active;
    },
    switchSortingByRating: (
      state,
      action: PayloadAction<{ active: boolean }>
    ) => {
      state.sortingByRating = action.payload.active;
    },
    switchSortDirection: (state) => {
      state.isSortingDec = !state.isSortingDec;
    },
    setOrdering: (
      state,
      action: PayloadAction<{ currentOrder: EOrdering }>
    ) => {
      state.requestOrdering = action.payload.currentOrder;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.fulfilled, (state, action) => {
        // if (state.sortingDateDec !== "notActive") {
        //   const isSortingDec = state.sortingDateDec === "true" ? true : false;
        //   state.games = sortingArrayByDate(action.payload, isSortingDec);
        // } else if (state.sortingRatingDec !== "notActive") {
        //   const isSortingDec = state.sortingRatingDec === "true" ? true : false;
        //   state.games = sortingArrayByRating(action.payload, isSortingDec);
        // } else {
        //   state.games = action.payload;
        // }
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchMoreGames.fulfilled, (state, action) => {
        // if (state.sortingDateDec !== "notActive") {
        //   const isSortingDec = state.sortingDateDec === "true" ? true : false;
        //   const sortedArray = sortingArrayByDate(action.payload, isSortingDec);
        //   state.games = [...state.games, ...sortedArray];
        // } else if (state.sortingRatingDec !== "notActive") {
        //   const isSortingDec = state.sortingRatingDec === "true" ? true : false;
        //   const sortedArray = sortingArrayByRating(
        //     action.payload,
        //     isSortingDec
        //   );
        //   state.games = [...state.games, ...sortedArray];
        // } else {
        //   state.games = [...state.games, ...action.payload];
        // }
        state.games = [...state.games, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchMoreGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreGames.rejected, (state) => {
        state.error = "Warning";
      })
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
  switchSortingByDate,
  switchSortingByRating,
  switchSortDirection,
  setOrdering,
} = gamesSlice.actions;

export default gamesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
