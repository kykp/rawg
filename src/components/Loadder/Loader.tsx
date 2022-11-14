import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./loader.module.scss";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import { fetchMoreGames } from "../../store/games/asyncActions";
import {
  selectFilters,
  selectSearch,
  selectLoading,
  selectError,
  selectResearchResults,
  selectGamesByFilter,
  selectSortingByRating,
  selectSortingByDate,
  selectSortDirection,
  selectOrdering,
} from "../../store/games/selectors";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectGamesByFilter);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const searchCounter = useAppSelector(selectResearchResults);
  const sortByRating = useAppSelector(selectSortingByRating);
  const sortByDate = useAppSelector(selectSortingByDate);
  const isSortingDec = useAppSelector(selectSortDirection);
  const ordering = useAppSelector(selectOrdering);
  const [page, setPage] = useState(2);

  let observer = useRef<IntersectionObserver | null>(null);

  let lastCardElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !error) {
            setPage((currentPage) => currentPage + 1);

            dispatch(
              fetchMoreGames({
                platformId: filter.id,
                isDateSort: sortByDate,
                isRatingSort: sortByRating,
                isSortDirectionDec: isSortingDec,
                ordering,
                page,
                search,
              })
            );
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [
      error,
      loading,
      dispatch,
      filter,
      page,
      search,
      isSortingDec,
      ordering,
      sortByDate,
      sortByRating,
    ]
  );

  useEffect(() => {
    setPage(2);
  }, [isSortingDec]);

  useEffect(() => {
    if (filter.slug !== "") {
      setPage(2);
    }
  }, [filter]);

  return (
    <>
      {searchCounter !== 0 && data?.length !== searchCounter
        ? !loading && (
            <div ref={lastCardElementRef} className={styles.loader}>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              />
            </div>
          )
        : null}
    </>
  );
};
