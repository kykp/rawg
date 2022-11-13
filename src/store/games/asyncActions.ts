import { Game, setSearchCounter } from "./gamesSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { generateNewUrl } from "../../helper/generateNewUrl";

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
  {
    platformId: number | null;
    isDateSort: boolean;
    isRatingSort: boolean;
    isSortDirectionDec: boolean;
    ordering: string;
    page: number;
    search: string;
  },
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
    console.log("fetchGames");
    const URL = generateNewUrl(
      `${API_URL}/games?key=${api_key}&page_size=${size}&dates=${limitDateFilter}`,
      isDateSort,
      isRatingSort,
      platformId,
      isSortDirectionDec,
      ordering,
      page,
      search
    );

    const response = await fetch(URL, parametrsObject);

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
  {
    platformId: number | null;
    isDateSort: boolean;
    isRatingSort: boolean;
    isSortDirectionDec: boolean;
    ordering: string;
    page: number;
    search: string;
  },
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
    console.log("fetchMoreGames");
    const URL = generateNewUrl(
      `${API_URL}/games?key=${api_key}&page_size=${size}&dates=${limitDateFilter}`,
      isDateSort,
      isRatingSort,
      platformId,
      isSortDirectionDec,
      ordering,
      page,
      search
    );

    const response = await fetch(URL, parametrsObject);

    if (!response.ok) {
      return rejectWithValue(`server error`);
    }

    const data = await response.json();
    return data.results;
  }
);

// export const fetchGamesSortingByDateRelease = createAsyncThunk<
//   Game[],
//   { sortDirectionByDateOnDec: boolean },
//   { rejectValue: string }
// >(
//   "games/fetchGamesSortingByDateRelease",
//   async ({ sortDirectionByDateOnDec }, { rejectWithValue }) => {
//     console.log("fetchGamesSortingByDateRelease");
//     const response = await fetch(
//       `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&ordering=${
//         sortDirectionByDateOnDec ? "-released" : "released"
//       }&dates=${limitDateFilter}`,
//       parametrsObject
//     );

//     if (!response.ok) {
//       return rejectWithValue(`server error`);
//     }
//     const data = await response.json();
//     return data.results;
//   }
// );
// export const fetchMoreGamesSortedByDateRelease = createAsyncThunk<
//   Game[],
//   { page: number; sortDirectionDec: boolean },
//   { rejectValue: string }
// >(
//   "games/fetchMoreGamesSortedByDateRelease",
//   async ({ page, sortDirectionDec }, { rejectWithValue }) => {
//     console.log("fetchMoreGamesSortedByDateRelease");
//     const response = await fetch(
//       `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&ordering=${
//         sortDirectionDec ? "-released" : "released"
//       }&dates=${limitDateFilter}`,
//       parametrsObject
//     );

//     if (!response.ok) {
//       return rejectWithValue(`server error`);
//     }
//     const data = await response.json();
//     return data.results;
//   }
// );

// export const fetchGamesByPlatform = createAsyncThunk<
//   Game[],
//   { filter: number },
//   { rejectValue: string }
// >("games/fetchGamesByPlatform", async ({ filter }, { rejectWithValue }) => {
//   console.log("fetchGamesByPlatform");
//   const response = await fetch(
//     `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&parent_platforms=${filter}&dates=${limitDateFilter}`,
//     parametrsObject
//   );

//   if (!response.ok) {
//     return rejectWithValue(`server error`);
//   }

//   const data = await response.json();
//   return data.results;
// });

// export const fetchMoreGamesByPlatform = createAsyncThunk<
//   Game[],
//   { page: number; filter: number },
//   { rejectValue: string }
// >(
//   "games/fetchMoreGamesByPlatform",
//   async ({ page, filter }, { rejectWithValue }) => {
//     console.log("fetchMoreGamesByPlatform");
//     const response = await fetch(
//       `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&parent_platforms=${filter}&dates=${limitDateFilter}`,
//       parametrsObject
//     );

//     if (!response.ok) {
//       return rejectWithValue(`server error`);
//     }

//     const data = await response.json();
//     return data.results;
//   }
// );

// export const fetchGamesBySearch = createAsyncThunk<
//   Game[],
//   { search: string },
//   { rejectValue: string }
// >(
//   "games/fetchGamesBySearch",
//   async ({ search }, { rejectWithValue, dispatch }) => {
//     console.log("fetchGamesBySearch");
//     const response = await fetch(
//       `${API_URL}/games?key=${api_key}&page=1&page_size=${size}&search=${search}`,
//       parametrsObject
//     );

//     if (!response.ok) {
//       return rejectWithValue(`server error`);
//     }
//     const data = await response.json();
//     dispatch(setSearchCounter({ counter: data.count }));
//     return data.results;
//   }
// );

// export const fetchMoreGamesBySearch = createAsyncThunk<
//   Game[],
//   { search: string; page: number },
//   { rejectValue: string }
// >(
//   "games/fetchMoreGamesBySearch",
//   async ({ search, page }, { rejectWithValue }) => {
//     console.log("fetchMoreGamesBySearch");
//     const response = await fetch(
//       `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}&search=${search}`,
//       parametrsObject
//     );
//     if (!response.ok) {
//       return rejectWithValue(`server error`);
//     }
//     const data = await response.json();
//     return data.results;
//   }
// );
