import React from "react";

import { LeftMenu } from "../LeftMenu/LeftMenu";
import { GamesGallery } from "../GamesGallery/GamesGallery";
import { ContentFilters } from "../ContentFilters/ContentFilters";
import { Loader } from "../Loadder/Loader";
import styles from "./mainContent.module.scss";

import clsx from "clsx";

export const MainContent = () => {
  console.log("render MainContent");
  return (
    <main className={clsx(styles.main, styles.page)}>
      <LeftMenu />
      <section className={styles.wrapper}>
        <ContentFilters />
        <GamesGallery />
        <Loader />
      </section>
    </main>
  );
};
