import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import {
  fetchGames,
  fetchMoreGames,
  fetchGamesByPlatform,
  fetchMoreGamesByPlatform,
  fetchGamesBySearch,
  fetchMoreGamesBySearch,
} from "./asyncActions";

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

type GamesState = {
  games: Game[];
  loading: boolean;
  error: string;
  filter: Filter;
  search: string;
};

const initialState: GamesState = {
  games: [],
  filter: { id: null, slug: "" },
  loading: false,
  error: "",
  search: "",
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.fulfilled, (state, action) => {
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
        state.games = [...state.games, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchMoreGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreGames.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchMoreGamesByPlatform.fulfilled, (state, action) => {
        state.games = [...state.games, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchMoreGamesByPlatform.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreGamesByPlatform.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchGamesBySearch.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(fetchGamesBySearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesBySearch.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchMoreGamesBySearch.fulfilled, (state, action) => {
        state.games = [...state.games, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchMoreGamesBySearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreGamesBySearch.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchGamesByPlatform.fulfilled, (state, action) => {
        state.games = action.payload;
        state.loading = false;
      })
      .addCase(fetchGamesByPlatform.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesByPlatform.rejected, (state) => {
        state.error = "Warning";
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { addFilter, addSearch, clearError } = gamesSlice.actions;

export default gamesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
