import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./loader.module.scss";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import { fetchMoreGames } from "../../store/games/asyncActions";
import {
  selectFilters,
  selectSearch,
  selectLoading,
  selectError,
  selectSortDirectionByDate,
  selectSortDirectinByRating,
  selectResearchResults,
  selectGamesByFilter,
} from "../../store/games/selectors";
import { ThreeDots } from "react-loader-spinner";
import { sortingDesc } from "../../store/games/gamesSlice";

export const Loader = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectGamesByFilter);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const searchCounter = useAppSelector(selectResearchResults);
  const [page, setPage] = useState(2);

  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const isSortingDecByRating: sortingDesc = useAppSelector(
    selectSortDirectinByRating
  );

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
                isDateSort: isSortingDecByDate !== "notActive" ? true : false,
                isRatingSort:
                  isSortingDecByRating !== "notActive" ? true : false,
                isSortDirectionDec:
                  isSortingDecByDate === "true" ||
                  isSortingDecByRating === "true"
                    ? true
                    : false,
                ordering:
                  isSortingDecByDate === "notActive" &&
                  isSortingDecByRating === "notActive"
                    ? ""
                    : isSortingDecByRating === "true" ||
                      isSortingDecByRating === "false"
                    ? "rating"
                    : "released",
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
      isSortingDecByDate,
      isSortingDecByRating,
      search,
    ]
  );

  useEffect(() => {
    setPage(2);
  }, [isSortingDecByDate, isSortingDecByRating]);

  useEffect(() => {
    if (filter.slug !== "") {
      setPage(2);
    }
  }, [filter, isSortingDecByDate]);

  console.log(
    filter.id,
    isSortingDecByDate !== "notActive" ? true : false,

    isSortingDecByRating !== "notActive" ? true : false,

    isSortingDecByDate === "true" || isSortingDecByRating === "true"
      ? true
      : false,

    isSortingDecByDate === "notActive" && isSortingDecByRating === "notActive"
      ? ""
      : isSortingDecByRating === "true" || isSortingDecByRating === "false"
      ? "rating"
      : "released",
    page,
    search
  );
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
