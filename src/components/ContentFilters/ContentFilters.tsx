import React from "react";
import styles from "./contentFilters.module.scss";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import {
  selectFilters,
  selectSortDirectionByDate,
} from "../../store/games/selectors";
import { ReactComponent as Cross } from "../../assets/images/cross.svg";
import {
  clearFilter,
  switchDateSort,
  sortingDesc,
} from "../../store/games/gamesSlice";
import {
  fetchGames,
  fetchGamesSortingByDateRelease,
} from "../../store/games/asyncActions";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";

export const ContentFilters = () => {
  const dispatch = useAppDispatch();
  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const filter = useAppSelector(selectFilters);

  const clearProjectFilter = () => {
    isSortingDecByDate === "true"
      ? dispatch(
          fetchGamesSortingByDateRelease({ sortDirectionByDateOnDec: true })
        )
      : dispatch(
          fetchGamesSortingByDateRelease({ sortDirectionByDateOnDec: false })
        );
    dispatch(clearFilter());
  };

  const onHandleSort = () => {
    isSortingDecByDate === "notActive" || isSortingDecByDate === "false"
      ? dispatch(switchDateSort({ direction: sortingDesc.true }))
      : dispatch(switchDateSort({ direction: sortingDesc.false }));
  };

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
              onClick={clearProjectFilter}
            />
          ) : null}
        </div>
      </button>
      <button className={styles.filters__button} onClick={onHandleSort}>
        <BsArrowDownSquare className={styles.arrow} />
        <span> Sort by Release Date</span>
        <BsArrowUpSquare className={styles.arrow} />
      </button>
      {/* <button className={styles.filters__button}>
        <BsArrowDownSquare className={styles.arrow} />
        <span>Sort by Rating</span>
        <BsArrowUpSquare className={styles.arrow} />
      </button> */}
    </div>
  );
};
