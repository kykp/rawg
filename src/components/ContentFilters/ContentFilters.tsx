import React from "react";
import styles from "./contentFilters.module.scss";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import { selectFilters } from "../../store/games/selectors";
import { ReactComponent as Cross } from "../../assets/images/cross.svg";
import { clearFilter } from "../../store/games/gamesSlice";
export const ContentFilters = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectFilters);
  const onClickHandler = () => {
    dispatch(clearFilter());
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
              onClick={onClickHandler}
            />
          ) : null}
        </div>
      </button>
    </div>
  );
};
