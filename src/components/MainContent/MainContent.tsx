import React, { useState, useCallback, useRef } from "react";

import { LeftMenu } from "../LeftMenu/LeftMenu.tsx";
import { GamesGallery } from "../GamesGallery/GamesGallery.tsx";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import {
  fetchMoreGames,
  fetchMoreGamesByFilter,
  fetchMoreGamesBySearch,
} from "../../store/games/asyncActions";
import { selectFilters, selectSearch } from "../../store/games/selectors";
import styles from "./mainContent.module.scss";

import clsx from "clsx";
import { ThreeDots } from "react-loader-spinner";
import { ContentFilters } from "../ContentFilters/ContentFilters";

export const MainContent = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.games.loading);
  const filter = useAppSelector(selectFilters);
  const search = useAppSelector(selectSearch);

  const [page, setPage] = useState(2);

  let observer = useRef<IntersectionObserver | null>(null);
  let lastCardElementRef = useCallback(
    (el: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage(page + 1);

            if (search) dispatch(fetchMoreGamesBySearch({ page, search }));
            if (filter.id === -1) dispatch(fetchMoreGames({ page }));
            if (filter.id !== -1)
              dispatch(fetchMoreGamesByFilter({ page, filter: filter.id }));
          }
        },
        { rootMargin: "400px" }
      );
      if (el) observer.current.observe(el);
    },
    [loading, page, dispatch, filter.id, search]
  );

  console.log(loading);
  console.log(filter);
  return (
    <main className={clsx(styles.main, styles.page)}>
      <LeftMenu />
      <section className={styles.wrapper}>
        <ContentFilters />
        <GamesGallery />
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
      </section>
    </main>
  );
};
