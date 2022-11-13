import React, { useEffect } from "react";
import styles from "./contentFilters.module.scss";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import {
  selectFilters,
  selectSortDirectinByRating,
  selectSortDirectionByDate,
} from "../../store/games/selectors";
import { ReactComponent as Cross } from "../../assets/images/cross.svg";
import {
  clearFilter,
  switchDateSort,
  sortingDesc,
  switchRatingSort,
} from "../../store/games/gamesSlice";
import {
  fetchGames,
  // fetchGamesSortingByDateRelease,
} from "../../store/games/asyncActions";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";

export const ContentFilters = () => {
  const dispatch = useAppDispatch();
  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const isSortingDecByRating: sortingDesc = useAppSelector(
    selectSortDirectinByRating
  );

  const filter = useAppSelector(selectFilters);

  const onHandleSortByReleaseDate = () => {
    isSortingDecByDate === "notActive" || isSortingDecByDate === "false"
      ? dispatch(switchDateSort({ direction: sortingDesc.true }))
      : dispatch(switchDateSort({ direction: sortingDesc.false }));

    dispatch(switchRatingSort({ direction: sortingDesc.notActive }));
  };
  const onHandleSortByReleaseRating = () => {
    isSortingDecByRating === "notActive" || isSortingDecByRating === "false"
      ? dispatch(switchRatingSort({ direction: sortingDesc.true }))
      : dispatch(switchRatingSort({ direction: sortingDesc.false }));

    dispatch(switchDateSort({ direction: sortingDesc.notActive }));
  };

  useEffect(() => {
    dispatch(
      fetchGames({
        platformId: filter.id,
        isDateSort: isSortingDecByDate !== "notActive" ? true : false,
        isRatingSort: isSortingDecByRating !== "notActive" ? true : false,
        isSortDirectionDec:
          isSortingDecByDate === "true" || isSortingDecByRating === "true"
            ? true
            : false,
        ordering: isSortingDecByDate === "notActive" ? "rating" : "released",
        page: 1,
      })
    );
  }, [dispatch, filter, isSortingDecByDate, isSortingDecByRating]);

  console.log("isSortingDecByRating", isSortingDecByRating);
  return (
    <div className={styles.filters}>
      <button className={styles.filters__button}>
        <div className={styles.block}>
          <span className={styles.block__subtitle}>
            {filter.slug.toUpperCase() || <span> Platforms</span>}
          </span>
        </div>
        <div className={styles.pictures}>
          {filter.slug !== "" ? (
            <Cross
              width="10px"
              fill="white"
              className={styles.image}
              // onClick={clearProjectFilter}
            />
          ) : null}
        </div>
      </button>
      <button
        className={styles.filters__button}
        onClick={onHandleSortByReleaseDate}
      >
        <BsArrowDownSquare className={styles.arrow} />
        <span> Sort by Release Date</span>
        <BsArrowUpSquare className={styles.arrow} />
      </button>
      <button
        className={styles.filters__button}
        onClick={onHandleSortByReleaseRating}
      >
        <BsArrowDownSquare className={styles.arrow} />
        <span>Sort by Rating</span>
        <BsArrowUpSquare className={styles.arrow} />
      </button>
    </div>
  );
};
