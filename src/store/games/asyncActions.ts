import { Game, setSearchCounter } from "./gamesSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.rawg.io/api";
const api_key = process.env.REACT_APP_API_KEY;
const limitDateFilter = "&dates=2010-01-01,2023-12-31.1960-01-01,1969-12-31";
const size = 40;
const parametrsObject = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchGames = createAsyncThunk<
  Game[],
  void,
  { rejectValue: string }
>("games/fetchGames", async (_, { rejectWithValue }) => {
  const response = await fetch(
    `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&dates=${limitDateFilter}`,
    parametrsObject
  );

  if (!response.ok) {
    return rejectWithValue(`server error`);
  }
  const data = await response.json();
  return data.results;
});

export const fetchMoreGames = createAsyncThunk<
  Game[],
  { page: number },
  { rejectValue: string }
>("games/fetchMoreGames", async ({ page }, { rejectWithValue }) => {
  const response = await fetch(
    `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&dates=${limitDateFilter}`,
    parametrsObject
  );
  if (!response.ok) {
    return rejectWithValue(`server error`);
  }
  const data = await response.json();
  return data.results;
});

export const fetchGamesSortingByDateRelease = createAsyncThunk<
  Game[],
  { sortDirectionByDateOnDec: boolean },
  { rejectValue: string }
>(
  "games/fetchGamesSortingByDateRelease",
  async ({ sortDirectionByDateOnDec }, { rejectWithValue }) => {
    const response = await fetch(
      `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&ordering=${
        sortDirectionByDateOnDec ? "-released" : "released"
      }&dates=${limitDateFilter}`,
      parametrsObject
    );

    if (!response.ok) {
      return rejectWithValue(`server error`);
    }
    const data = await response.json();
    return data.results;
  }
);
export const fetchMoreGamesSortedByDateRelease = createAsyncThunk<
  Game[],
  { page: number; sortDirectionDec: boolean },
  { rejectValue: string }
>(
  "games/fetchMoreGamesSortedByDateRelease",
  async ({ page, sortDirectionDec }, { rejectWithValue }) => {
    console.log("we are here");
    const response = await fetch(
      `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&ordering=${
        sortDirectionDec ? "-released" : "released"
      }&dates=${limitDateFilter}`,
      parametrsObject
    );

    if (!response.ok) {
      return rejectWithValue(`server error`);
    }
    const data = await response.json();
    return data.results;
  }
);

export const fetchGamesByPlatform = createAsyncThunk<
  Game[],
  { filter: number },
  { rejectValue: string }
>("games/fetchGamesByPlatform", async ({ filter }, { rejectWithValue }) => {
  const response = await fetch(
    `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&parent_platforms=${filter}&dates=${limitDateFilter}`,
    parametrsObject
  );

  if (!response.ok) {
    return rejectWithValue(`server error`);
  }

  const data = await response.json();
  return data.results;
});

export const fetchMoreGamesByPlatform = createAsyncThunk<
  Game[],
  { page: number; filter: number },
  { rejectValue: string }
>(
  "games/fetchMoreGamesByPlatform",
  async ({ page, filter }, { rejectWithValue }) => {
    console.log("now we here");
    const response = await fetch(
      `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&parent_platforms=${filter}&dates=${limitDateFilter}`,
      parametrsObject
    );

    if (!response.ok) {
      return rejectWithValue(`server error`);
    }

    const data = await response.json();
    return data.results;
  }
);

export const fetchGamesBySearch = createAsyncThunk<
  Game[],
  { search: string },
  { rejectValue: string }
>(
  "games/fetchGamesBySearch",
  async ({ search }, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&search=${search}`,
      parametrsObject
    );

    if (!response.ok) {
      return rejectWithValue(`server error`);
    }
    const data = await response.json();
    dispatch(setSearchCounter({ counter: data.count }));
    return data.results;
  }
);

export const fetchMoreGamesBySearch = createAsyncThunk<
  Game[],
  { search: string; page: number },
  { rejectValue: string }
>(
  "games/fetchMoreGamesBySearch",
  async ({ search, page }, { rejectWithValue }) => {
    const response = await fetch(
      `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&search=${search}`,
      parametrsObject
    );
    if (!response.ok) {
      return rejectWithValue(`server error`);
    }
    const data = await response.json();
    return data.results;
  }
);
