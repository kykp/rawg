import { Platform } from "./platformSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { asyncActionFetcher } from "../../helper/asyncActionFetcher";

const API_URL = "platforms/lists/parents";

export const fetchPlatforms = createAsyncThunk<
  Platform[],
  void,
  { rejectValue: string }
>("platforms/fetchPlatforms", async (_, { rejectWithValue }) => {
  const response = await asyncActionFetcher(`${API_URL}`);
  if (!response.ok) {
    return rejectWithValue(`server error`);
  }
  const data = await response.json();
  return data.results;
});
