import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./loader.module.scss";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import {
  fetchMoreGames,
  fetchMoreGamesByFilter,
  fetchMoreGamesBySearch,
} from "../../store/games/asyncActions";
import {
  selectFilters,
  selectSearch,
  selectError,
} from "../../store/games/selectors";
import { ThreeDots } from "react-loader-spinner";
import { clearError } from "../../store/games/gamesSlice";

export const Loader = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.games.loading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);

  const [page, setPage] = useState(2);

  let observer = useRef<IntersectionObserver | null>(null);

  let lastCardElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !error) {
            setPage((prevPage) => prevPage + 1);
            console.log("Visible");
            dispatch(fetchMoreGames({ page }));
            // if (!filter) {
            //   console.log(true);
            // } else {
            //   console.log(false);
            // }
            // dispatch(fetchMoreGamesBySearch({ page, search }));
            // if (!filter.id) {
            //   dispatch(fetchMoreGamesBySearch({ page, search }));
            // }
            // if (search) dispatch(fetchMoreGamesBySearch({ page, search }));
            // if (filter.id === -1) dispatch(fetchMoreGames({ page }));
            // if (filter.id !== -1 && filter.id)
            //   dispatch(fetchMoreGamesByFilter({ page, filter: filter.id }));
          }
        },
        { rootMargin: "50px" }
      );
      if (node) observer.current.observe(node);
    },
    [page, dispatch, error, loading]
  );

  //   console.log(filter);
  console.log(error);
  console.log("render Loader");
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
      ) : null}
    </>
  );
};
