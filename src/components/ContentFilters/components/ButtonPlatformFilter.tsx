import React from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import { fetchGames } from "../../../store/games/asyncActions";
import {
  addSearch,
  clearFilter,
  setOrdering,
} from "../../../store/games/gamesSlice";
import {
  selectFilters,
  selectSearch,
  selectSortDirection,
} from "../../../store/games/selectors";
import { ReactComponent as Cross } from "../../../assets/images/cross.svg";
import styles from "../contentFilters.module.scss";
import { EOrdering } from "../../../store/games/gamesSlice";

export const ButtonPlatformFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const isSortingDec = useAppSelector(selectSortDirection);

  const onHandleClearFilter = () => {
    dispatch(clearFilter());
    dispatch(
      fetchGames({
        platformId: null,
        isDateSort: false,
        isRatingSort: false,
        isSortDirectionDec: isSortingDec,
        ordering: "",
        page: 1,
        search: "",
      })
    );
    dispatch(setOrdering({ currentOrder: EOrdering.undefined }));
    dispatch(addSearch({ search: "" }));
  };
  if (search === "" && filter.slug === "") {
    return <></>;
  }
  return (
    <button className={styles.filters__button}>
      <div className={styles.block}>
        <div className={styles.block__subtitle}>
          {search !== "" && <p>{search.toUpperCase()}</p>}
          {filter.id && <p>{filter.slug.toUpperCase()}</p>}
        </div>
      </div>
      <div className={styles.pictures}>
        {filter.slug !== "" || search ? (
          <Cross
            fill="white"
            className={styles.image}
            onClick={onHandleClearFilter}
          />
        ) : null}
      </div>
    </button>
  );
};
