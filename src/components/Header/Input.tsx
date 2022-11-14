import React, { useState } from "react";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import { addSearch } from "../../store/games/gamesSlice";
import { fetchGames } from "../../store/games/asyncActions";

import { useNavigate } from "react-router-dom";
import {
  selectFilters,
  selectOrdering,
  selectSortDirection,
  selectSortingByDate,
  selectSortingByRating,
} from "../../store/games/selectors";
export const Input = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSortingDec = useAppSelector(selectSortDirection);
  const sortByDate = useAppSelector(selectSortingByDate);
  const sortByRating = useAppSelector(selectSortingByRating);
  const filter = useAppSelector(selectFilters);
  const ordering = useAppSelector(selectOrdering);

  const [search, setSearch] = useState("");

  const onHandleChange = (e: { target: HTMLInputElement }) => {
    setSearch(e.target.value);
  };

  const onHandleClick = () => {
    dispatch(addSearch({ search }));

    dispatch(
      fetchGames({
        platformId: filter.id,
        isDateSort: sortByDate,
        isRatingSort: sortByRating,
        isSortDirectionDec: isSortingDec,
        ordering,
        page: 1,
        search,
      })
    );
    setSearch("");
    navigate("/");
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
