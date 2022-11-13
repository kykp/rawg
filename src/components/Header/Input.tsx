import React, { useState } from "react";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import { addSearch, sortingDesc } from "../../store/games/gamesSlice";
import { fetchGames } from "../../store/games/asyncActions";
import {
  selectSortDirectinByRating,
  selectSortDirectionByDate,
} from "../../store/games/selectors";

export const Input = () => {
  const dispatch = useAppDispatch();
  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const isSortingDecByRating = useAppSelector(selectSortDirectinByRating);
  const [search, setSearch] = useState("");

  const onHandleChange = (e: { target: HTMLInputElement }) => {
    setSearch(e.target.value);
  };

  const onHandleClick = () => {
    dispatch(addSearch({ search }));

    dispatch(
      fetchGames({
        platformId: null,
        isDateSort: isSortingDecByDate !== "notActive" ? true : false,
        isRatingSort: isSortingDecByRating !== "notActive" ? true : false,
        isSortDirectionDec:
          isSortingDecByDate === "true" || isSortingDecByRating === "true"
            ? true
            : false,
        ordering: isSortingDecByDate === "notActive" ? "rating" : "released",
        page: 1,
        search,
      })
    );
    setSearch("");
  };

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      onHandleClick();
    }
  };
  return (
    <>
      <input
        onKeyDown={onHandleKeyDown}
        type="text"
        placeholder="Game Search"
        className={styles.search_input}
        value={search}
        onChange={onHandleChange}
      />
      <button className={styles.button} onClick={onHandleClick}>
        Search
      </button>
    </>
  );
};
