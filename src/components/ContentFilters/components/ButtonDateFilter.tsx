import React from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import {
  sortingDesc,
  switchDateSort,
  switchRatingSort,
} from "../../../store/games/gamesSlice";
import { selectSortDirectionByDate } from "../../../store/games/selectors";
import styles from "../contentFilters.module.scss";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";

export const ButtonDateFilter = () => {
  const dispatch = useAppDispatch();

  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const onHandleSortByReleaseDate = () => {
    isSortingDecByDate === "notActive" || isSortingDecByDate === "false"
      ? dispatch(switchDateSort({ direction: sortingDesc.true }))
      : dispatch(switchDateSort({ direction: sortingDesc.false }));

    dispatch(switchRatingSort({ direction: sortingDesc.notActive }));
  };

  return (
    <>
      <button
        className={styles.filters__button}
        onClick={onHandleSortByReleaseDate}
      >
        <span> Sort by Release Date</span>
        {isSortingDecByDate === "notActive" ? null : isSortingDecByDate ===
          "true" ? (
          <BsArrowDownSquare />
        ) : (
          <BsArrowUpSquare />
        )}
      </button>
    </>
  );
};
