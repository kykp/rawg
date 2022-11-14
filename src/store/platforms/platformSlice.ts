import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { fetchPlatforms } from "./asyncActions";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

type GamesState = {
  platforms: Platform[];
  loading: boolean;
  error: string | null;
};

const initialState: GamesState = {
  platforms: [],
  loading: false,
  error: null,
};

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlatforms.fulfilled, (state, action) => {
        state.platforms = action.payload;
        state.loading = false;
      })
      .addCase(fetchPlatforms.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default platformSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
