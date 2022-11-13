import { createAsyncThunk } from "@reduxjs/toolkit";
import { AboutGame, Screenshots } from "./gameSlice";

const API_URL = "https://api.rawg.io/api";
const api_key = process.env.REACT_APP_API_KEY;

export const fetchGameDetails = createAsyncThunk<
  AboutGame,
  { slug: string },
  { rejectValue: string }
>("game/fetchGameDetails", async ({ slug }, { rejectWithValue }) => {
  const response = await fetch(`${API_URL}/games/${slug}?key=${api_key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return rejectWithValue(`server error`);
  }
  const data = await response.json();
  return data;
});

export const fetchGameScreenshots = createAsyncThunk<
  Screenshots[],
  { slug: string },
  { rejectValue: string }
>("game/fetchGameScreenshots", async ({ slug }, { rejectWithValue }) => {
  const response = await fetch(
    `${API_URL}/games/${slug}/screenshots?key=${api_key}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    return rejectWithValue(`server error`);
  }
  const data = await response.json();
  return data.results;
});
