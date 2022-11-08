import { Game } from "./gamesSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://api.rawg.io/api";
const api_key = process.env.REACT_APP_API_KEY;
const size = 20;
export const fetchMoreGames = createAsyncThunk<
  Game[],
  { page: number },
  { rejectValue: string }
>("games/fetchMoreGames", async ({ page }, { rejectWithValue }) => {
  const response = await fetch(
    `${API_URL}/games?key=${api_key}&page=${page}&page_size=${size}`,
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

// export const addTask = createAsyncThunk<Todo, Todo, { rejectValue: string }>(
//   "todos/addTask",
//   async (
//     { id, title, project, archive, deleted, order },
//     { rejectWithValue }
//   ) => {
//     const newTask = {
//       id,
//       title,
//       project,
//       archive,
//       deleted,
//       order,
//     };
//     const response = await serverRequestSender(
//       `http://localhost:5000/tasks/add`,
//       newTask
//     );

//     if (!response.ok) {
//       return rejectWithValue("cant add new project. Server Error");
//     }

//     return (await response.json()) as Todo;
//   }
// );
