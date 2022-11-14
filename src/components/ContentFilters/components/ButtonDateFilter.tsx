import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";

import {
  selectFilters,
  selectOrdering,
  selectSearch,
  selectSortDirection,
  selectSortingByDate,
} from "../../../store/games/selectors";
import styles from "../contentFilters.module.scss";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { fetchGames } from "../../../store/games/asyncActions";
import {
  setOrdering,
  switchSortDirection,
  switchSortingByDate,
  switchSortingByRating,
} from "../../../store/games/gamesSlice";
import { EOrdering } from "../../../store/games/gamesSlice";
export const ButtonDateFilter = () => {
  const isSortingDec = useAppSelector(selectSortDirection);
  const sortByDate = useAppSelector(selectSortingByDate);
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const ordering = useAppSelector(selectOrdering);

  const onHandleClick = () => {
    if (!sortByDate) {
      dispatch(switchSortingByDate({ active: true }));
      dispatch(switchSortingByRating({ active: false }));
      dispatch(setOrdering({ currentOrder: EOrdering.released }));
    }
    dispatch(switchSortDirection());
  };
  useEffect(() => {
    if (sortByDate) {
      dispatch(
        fetchGames({
          platformId: filter.id,
          isDateSort: true,
          isRatingSort: false,
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
    <>
      <button className={styles.filters__button} onClick={onHandleClick}>
        <span> Sort by Release Date</span>
        {sortByDate ? (
          isSortingDec ? (
            <BsArrowDownSquare />
          ) : (
            <BsArrowUpSquare />
          )
        ) : null}
      </button>
    </>
  );
};
