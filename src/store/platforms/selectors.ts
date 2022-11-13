import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const getallPlatforms = (store: RootState) => store.platforms;

export const selectAllPlatforms = createSelector(
  getallPlatforms,
  (store) => store.platforms
);
