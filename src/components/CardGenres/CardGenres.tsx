import React from "react";

import { Genres } from "../../store/games/gamesSlice";
import styles from "./cardGenres.module.scss";

export const CardGenres = ({ name }: Genres) => {
  return (
    <>
      <p className={styles.p}>{name}</p>
    </>
  );
};
