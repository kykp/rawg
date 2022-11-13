import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./loader.module.scss";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import {
  fetchMoreGames,
  // fetchMoreGamesByPlatform,
  // fetchMoreGamesBySearch,
  // fetchMoreGamesSortedByDateRelease,
} from "../../store/games/asyncActions";
import {
  selectFilters,
  selectSearch,
  selectLoading,
  selectError,
  selectSortDirectionByDate,
  selectSortDirectinByRating,
} from "../../store/games/selectors";
import { ThreeDots } from "react-loader-spinner";
import { sortingDesc } from "../../store/games/gamesSlice";

export const Loader = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const [page, setPage] = useState(2);

  const isSortingDecByDate: sortingDesc = useAppSelector(
    selectSortDirectionByDate
  );
  const isSortingDecByRating = useAppSelector(selectSortDirectinByRating);

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
                isDateSort: true,
                isRatingSort: false,
                isSortDirectionDec:
                  isSortingDecByDate === "true" ? true : false,
                ordering: "released",
                page: page,
              })
            );
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [error, loading, dispatch, filter, page, isSortingDecByDate]
  );

  useEffect(() => {
    setPage(2);
  }, [isSortingDecByDate]);

  useEffect(() => {
    if (filter.slug !== "") {
      setPage(2);
    }
  }, [filter, isSortingDecByDate]);

  return (
    <>
      {!loading ? (
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
      ) : (
        <div>Hello there</div>
      )}
    </>
  );
};

// if (
//   filter.slug === "" &&
//   search === "" &&
//   isSortingDecByDate === "notActive" &&
//   isSortingDecByRating === "notActive"
// ) {
//   dispatch(fetchMoreGames({ page }));
// }

// if (isSortingDecByDate === "true") {
//   dispatch(
//     fetchMoreGamesSortedByDateRelease({
//       page,
//       sortDirectionDec: true,
//     })
//   );
// }
// if (isSortingDecByDate === "false") {
//   dispatch(
//     fetchMoreGamesSortedByDateRelease({
//       page,
//       sortDirectionDec: false,
//     })
//   );
// }
// if (filter.id !== null) {
//   dispatch(fetchMoreGamesByPlatform({ page, filter: filter.id }));
// }

// if (search !== "") {
//   dispatch(fetchMoreGamesBySearch({ page, search }));
// }
