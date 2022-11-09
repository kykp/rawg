import React from "react";
import styles from "./searchResult.module.scss";

export const SearchResult = () => {
  return (
    <div className={styles.noresults}>
      <h2 className={styles.noresults__title}>
        К сожалению по вашему запросу ничего не найдено
      </h2>
    </div>
  );
};
