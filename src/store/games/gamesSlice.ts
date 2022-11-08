import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchMoreGames } from "./asyncActions";

export type Game = {
  id: string;
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
  };
};

export type Genres = {
  id: number;
  name: string;
};

type GamesState = {
  games: Game[];
  loading: boolean;
  error: string | null;
};

const initialState: GamesState = {
  games: [],
  loading: false,
  error: null,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoreGames.fulfilled, (state, action) => {
        state.games = [...state.games, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchMoreGames.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// export const {} = gamesSlice.actions;

export default gamesSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
