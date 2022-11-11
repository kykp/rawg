import React from "react";
import styles from "./contentFilters.module.scss";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import {
  selectFilters,
  selectSortDirection,
} from "../../store/games/selectors";
import { ReactComponent as Cross } from "../../assets/images/cross.svg";
import { clearFilter, switchDateSort } from "../../store/games/gamesSlice";

import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";

export const ContentFilters = () => {
  const dispatch = useAppDispatch();
  const sortDirection = useAppSelector(selectSortDirection);
  const filter = useAppSelector(selectFilters);

  const clearProjectFilter = () => {
    dispatch(clearFilter());
  };

  const onHandleSort = () => {
    dispatch(switchDateSort({ direction: !sortDirection }));
  };

  console.log(sortDirection);
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
        <span>Sort by Rating</span>
        <BsArrowUpSquare className={styles.arrow} />
      </button>

      <button className={styles.filters__button}>
        <BsArrowDownSquare className={styles.arrow} />
        <span> Sort by Release Date</span>
        <BsArrowUpSquare className={styles.arrow} />
      </button>
    </div>
  );
};
