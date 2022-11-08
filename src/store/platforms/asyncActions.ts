import { Platform } from "./platformSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.rawg.io/api/platforms/lists/parents?key=";
const api_key = process.env.REACT_APP_API_KEY;

export const fetchPlatforms = createAsyncThunk<
  Platform[],
  void,
  { rejectValue: string }
>("platforms/fetchPlatforms", async (_, { rejectWithValue }) => {
  const response = await fetch(`${API_URL}${api_key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (!response.ok) {
    return rejectWithValue(`server error`);
  }
  const data = await response.json();
  return data.results;
});
