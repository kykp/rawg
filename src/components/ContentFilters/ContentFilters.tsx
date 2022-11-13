import React from "react";
import styles from "./contentFilters.module.scss";
import { useAppSelector } from "../../helper/hook";
import { selectResearchResults } from "../../store/games/selectors";

import { ButtonDateFilter } from "./components/ButtonDateFilter";
import { ButtonRatingFilter } from "./components/ButtonRatingFilter";
import { ButtonPlatformFilter } from "./components/ButtonPlatformFilter";

export const ContentFilters = () => {
  const searchCounter = useAppSelector(selectResearchResults);
  return (
    <>
      {searchCounter !== 0 && (
        <div className={styles.filters}>
          <ButtonPlatformFilter />
          <ButtonDateFilter />
          <ButtonRatingFilter />
        </div>
      )}
    </>
  );
};
