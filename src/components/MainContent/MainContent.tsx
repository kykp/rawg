import React, { useState, useCallback, useRef } from "react";

import { LeftMenu } from "../LeftMenu/LeftMenu.tsx";
import { GamesGallery } from "../GamesGallery/GamesGallery.tsx";
import { useAppSelector, useAppDispatch } from "../../helper/hook";
import { fetchMoreGames } from "../../store/games/asyncActions";
import styles from "./mainContent.module.scss";

import clsx from "clsx";
import { ThreeDots } from "react-loader-spinner";

export const MainContent = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((store) => store.games.loading);
  const [page, setPage] = useState(1);

  let observer = useRef<IntersectionObserver | null>(null);
  let lastCardElementRef = useCallback(
    (el: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage(page + 1);
          dispatch(fetchMoreGames({ page }));
        }
      });
      if (el) observer.current.observe(el);
    },
    [loading, page, dispatch]
  );

  console.log(loading);
  return (
    <main className={clsx(styles.main, styles.page)}>
      <LeftMenu />
      <section className={styles.wrapper}>
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
