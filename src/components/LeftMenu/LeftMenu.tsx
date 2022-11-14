import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helper/hook";

import { LeftMenuItem } from "../LeftMenuItem/LeftMenuItem";
import { LeftMenuItemSkeleton } from "../LeftMenuItemSkeleton/LeftMenuItemSkeleton";
import { Link } from "react-router-dom";
import styles from "./leftMenu.module.scss";
import { selectAllPlatforms } from "../../store/platforms/selectors";
import { fetchGames } from "../../store/games/asyncActions";
import {
  selectFilters,
  selectOrdering,
  selectSearch,
  selectSortDirection,
  selectSortingByDate,
  selectSortingByRating,
} from "../../store/games/selectors";

const plugsNumbers = 8;
export const LeftMenu = () => {
  const data = useAppSelector(selectAllPlatforms);
  const filter = useAppSelector(selectFilters);
  const isSortingDec = useAppSelector(selectSortDirection);
  const search = useAppSelector(selectSearch);
  const sortByRating = useAppSelector(selectSortingByRating);
  const sortByDate = useAppSelector(selectSortingByDate);
  const ordering = useAppSelector(selectOrdering);

  const dispatch = useAppDispatch();

  const onHandleClick = () => {
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
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (filter.slug !== "") {
      dispatch(
        fetchGames({
          platformId: filter.id,
          isDateSort: sortByDate,
          isRatingSort: sortByRating,
          isSortDirectionDec: isSortingDec,
          ordering,
          page: 1,
          search,
        })
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className={styles.sticky}>
      <div className={styles.leftMenu}>
        <div className={styles.leftMenu_sidebar}>
          <Link to="/">
            <span
              className={styles.leftMenu_sidebar_title}
              onClick={onHandleClick}
            >
              Home
            </span>
          </Link>
        </div>
        <div className={styles.leftMenu_sidebar}>
          <span className={styles.leftMenu_sidebar_title}>Platforms</span>
          <ul className={styles.items}>
            {data.length === 0
              ? [...Array(plugsNumbers)].map((e, i) => (
                  <LeftMenuItemSkeleton key={i} />
                ))
              : data.map((el) => <LeftMenuItem key={el.id} {...el} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};
