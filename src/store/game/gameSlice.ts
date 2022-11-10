import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchGameDetails, fetchGameScreenshots } from "./asyncActions";

export type ParentPlatforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

export type Screenshots = {
  id: number;
  name: string;
};

export type AboutGame = {
  id: number;
  slug: string;
  name: string;
  description: string;
  metecritic: number;
  released: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  parent_platforms: ParentPlatforms[];
  developers: SynteticObj[];
  genres: SynteticObj[];
  tags: SynteticObj[];
  description_raw: string;
};

type SynteticObj = {
  id: number;
  name: string;
};
type GameState = {
  currentGame: AboutGame;
  currentGameScreens: Screenshots;
  error: string;
  loading: boolean;
};
const initialState: GameState = {
  currentGame: {} as AboutGame,
  currentGameScreens: {} as Screenshots,
  error: "",
  loading: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.currentGame = action.payload;
        state.loading = false;
      })
      .addCase(fetchGameDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGameDetails.rejected, (state) => {
        state.error = "Warning";
      })
      .addCase(fetchGameScreenshots.fulfilled, (state, action) => {
        state.currentGameScreens = action.payload;
        state.loading = false;
      })
      .addCase(fetchGameScreenshots.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGameScreenshots.rejected, (state) => {
        state.error = "Warning";
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {} = gameSlice.actions;

export default gameSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
