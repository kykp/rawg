import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import {
  selectFilters,
  selectOrdering,
  selectSearch,
  selectSortDirection,
  selectSortingByRating,
} from "../../../store/games/selectors";
import styles from "../contentFilters.module.scss";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { fetchGames } from "../../../store/games/asyncActions";
import {
  switchSortingByRating,
  switchSortDirection,
  switchSortingByDate,
  setOrdering,
} from "../../../store/games/gamesSlice";
import { EOrdering } from "../../../store/games/gamesSlice";
export const ButtonRatingFilter = () => {
  const isSortingDec = useAppSelector(selectSortDirection);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const sortByRating = useAppSelector(selectSortingByRating);
  const ordering = useAppSelector(selectOrdering);
  const dispatch = useAppDispatch();

  const onHandleClick = () => {
    if (!sortByRating) {
      dispatch(switchSortingByRating({ active: true }));
      dispatch(switchSortingByDate({ active: false }));
      dispatch(setOrdering({ currentOrder: EOrdering.rating }));
    }
    dispatch(switchSortDirection());
  };

  useEffect(() => {
    if (sortByRating) {
      dispatch(
        fetchGames({
          platformId: filter.id,
          isDateSort: false,
          isRatingSort: true,
          isSortDirectionDec: isSortingDec,
          ordering,
          page: 1,
          search,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingDec]);

  return (
    <button className={styles.filters__button} onClick={onHandleClick}>
      <span>Sort by Rating</span>
      {sortByRating ? (
        isSortingDec ? (
          <BsArrowDownSquare />
        ) : (
          <BsArrowUpSquare />
        )
      ) : null}
    </button>
  );
};
