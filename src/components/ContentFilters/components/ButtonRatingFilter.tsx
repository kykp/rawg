import React from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import {
  sortingDesc,
  switchDateSort,
  switchRatingSort,
} from "../../../store/games/gamesSlice";
import { selectSortDirectinByRating } from "../../../store/games/selectors";
import styles from "../contentFilters.module.scss";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
export const ButtonRatingFilter = () => {
  const dispatch = useAppDispatch();
  const isSortingDecByRating: sortingDesc = useAppSelector(
    selectSortDirectinByRating
  );
  const onHandleSortByReleaseRating = () => {
    isSortingDecByRating === "notActive" || isSortingDecByRating === "false"
      ? dispatch(switchRatingSort({ direction: sortingDesc.true }))
      : dispatch(switchRatingSort({ direction: sortingDesc.false }));

    dispatch(switchDateSort({ direction: sortingDesc.notActive }));
  };

  return (
    <button
      className={styles.filters__button}
      onClick={onHandleSortByReleaseRating}
    >
      <span>Sort by Rating</span>
      {isSortingDecByRating === "notActive" ? null : isSortingDecByRating ===
        "true" ? (
        <BsArrowDownSquare />
      ) : (
        <BsArrowUpSquare />
      )}
    </button>
  );
};
