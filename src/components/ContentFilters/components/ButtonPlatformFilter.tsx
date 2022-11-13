import React from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import { fetchGames } from "../../../store/games/asyncActions";
import { clearFilter } from "../../../store/games/gamesSlice";
import { selectFilters } from "../../../store/games/selectors";
import { ReactComponent as Cross } from "../../../assets/images/cross.svg";
import styles from "../contentFilters.module.scss";

export const ButtonPlatformFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilters);
  const onHandleClearFilter = () => {
    dispatch(clearFilter());
    dispatch(
      fetchGames({
        platformId: null,
        isDateSort: false,
        isRatingSort: false,
        isSortDirectionDec: true,
        ordering: "",
        page: 1,
        search: "",
      })
    );
  };
  return (
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
            onClick={onHandleClearFilter}
          />
        ) : null}
      </div>
    </button>
  );
};
