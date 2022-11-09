import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./loader.module.scss";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import {
  fetchMoreGames,
  fetchMoreGamesByPlatform,
  fetchMoreGamesBySearch,
} from "../../store/games/asyncActions";
import {
  selectFilters,
  selectSearch,
  selectError,
  selectResearchResults,
} from "../../store/games/selectors";
import { ThreeDots } from "react-loader-spinner";
import { clearError } from "../../store/games/gamesSlice";

export const Loader = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.games.loading);
  const error = useAppSelector(selectError);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);
  const searchResult = useAppSelector(selectResearchResults);

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
            if (filter.id === null && search === "") {
              console.log("dispatched fetchMoreGames");
              dispatch(fetchMoreGames({ page }));
            } else if (filter.id !== null) {
              console.log("dispatched fetchMoreGamesByPlatform");
              dispatch(fetchMoreGamesByPlatform({ page, filter: filter.id }));
            } else if (search !== "") {
              console.log("dispatched Search more");
              dispatch(fetchMoreGamesBySearch({ page, search }));
            }
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [page, dispatch, error, loading, filter.id, search]
  );

  useEffect(() => {
    if (filter.id !== null) {
      setPage(2);
    }
  }, [filter]);

  if (searchResult === 0) {
    return <></>;
  }
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
        <div>{error}</div>
      )}
    </>
  );
};
