import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import {
  sortingDesc,
  switchDateSort,
  switchRatingSort,
} from "../../../store/games/gamesSlice";
import {
  selectFilters,
  selectSearch,
  selectSortDirectionByDate,
} from "../../../store/games/selectors";
import styles from "../contentFilters.module.scss";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import { fetchGames } from "../../../store/games/asyncActions";

export const ButtonDateFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const onHandleSortByReleaseDate = () => {
    isSortingDecByDate === "notActive" || isSortingDecByDate === "false"
      ? dispatch(switchDateSort({ direction: sortingDesc.true }))
      : dispatch(switchDateSort({ direction: sortingDesc.false }));

    dispatch(switchRatingSort({ direction: sortingDesc.notActive }));
  };

  useEffect(() => {
    if (isSortingDecByDate !== "notActive") {
      dispatch(
        fetchGames({
          platformId: filter.id,
          isDateSort: true,
          isRatingSort: false,
          isSortDirectionDec: isSortingDecByDate === "true" ? true : false,
          ordering: "rating",
          page: 1,
          search,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingDecByDate]);

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
