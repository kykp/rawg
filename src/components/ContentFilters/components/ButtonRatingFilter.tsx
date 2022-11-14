import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import {
  sortingDesc,
  switchDateSort,
  switchRatingSort,
} from "../../../store/games/gamesSlice";
import {
  selectFilters,
  selectSearch,
  selectSortDirectinByRating,
} from "../../../store/games/selectors";
import styles from "../contentFilters.module.scss";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { fetchGames } from "../../../store/games/asyncActions";

export const ButtonRatingFilter = () => {
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
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

  useEffect(() => {
    if (isSortingDecByRating !== "notActive") {
      dispatch(
        fetchGames({
          platformId: filter.id,
          isDateSort: false,
          isRatingSort: true,
          isSortDirectionDec: isSortingDecByRating === "true" ? true : false,
          ordering: "rating",
          page: 1,
          search,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingDecByRating]);

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
