import React from "react";
import styles from "./contentFilters.module.scss";
import { useAppSelector } from "../../helper/hook";
import { selectFilters } from "../../store/games/selectors";

export const ContentFilters = () => {
  const filter = useAppSelector(selectFilters);

  return (
    <div className={styles.filters}>
      <button className={styles.filters__button}>
        <div className={styles.block}>
          <span className={styles.block__title}>Filtred by:</span>
          <span className={styles.block__subtitle}>{filter.slug}</span>
        </div>
      </button>
    </div>
  );
};
