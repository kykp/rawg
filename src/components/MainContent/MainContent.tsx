import React from "react";

import { GamesGallery } from "../GamesGallery/GamesGallery";
import { ContentFilters } from "../ContentFilters/ContentFilters";
import { Loader } from "../Loadder/Loader";
import styles from "./mainContent.module.scss";

export const MainContent = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <ContentFilters />
        <GamesGallery />
        <Loader />
      </section>
    </>
  );
};
