import { Game, setSearchCounter } from "./gamesSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateNewUrl } from "../../helper/generateNewUrl";
import { asyncActionFetcherGames } from "../../helper/asyncActionFetcherGames";

type GameItem = {
  platformId: number | null;
  isDateSort: boolean;
  isRatingSort: boolean;
  isSortDirectionDec: boolean;
  ordering: string;
  page: number;
  search: string;
};

export const fetchGames = createAsyncThunk<
  Game[],
  GameItem,
  { rejectValue: string }
>(
  "games/fetchGames",
  async (
    {
      platformId,
      isDateSort,
      isRatingSort,
      isSortDirectionDec,
      ordering,
      page,
      search,
    },
    { rejectWithValue, dispatch }
  ) => {
    const URL = generateNewUrl(
      platformId,
      isDateSort,
      isRatingSort,
      isSortDirectionDec,
      ordering,
      page,
      search
    );
    const response = await asyncActionFetcherGames(URL);
    if (!response.ok) {
      return rejectWithValue(`server error`);
    }
    const data = await response.json();
    dispatch(setSearchCounter({ counter: data.count }));
    return data.results;
  }
);

export const fetchMoreGames = createAsyncThunk<
  Game[],
  GameItem,
  { rejectValue: string }
>(
  "games/fetchMoreGames",
  async (
    {
      platformId,
      isDateSort,
      isRatingSort,
      isSortDirectionDec,
      ordering,
      page,
      search,
    },
    { rejectWithValue }
  ) => {
    const URL = generateNewUrl(
      platformId,
      isDateSort,
      isRatingSort,
      isSortDirectionDec,
      ordering,
      page,
      search
    );
    const response = await asyncActionFetcherGames(URL);

    if (!response.ok) {
      return rejectWithValue(`server error`);
    }

    const data = await response.json();
    return data.results;
  }
);
