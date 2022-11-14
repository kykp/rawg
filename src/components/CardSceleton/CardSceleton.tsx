import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./cardSceleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSceleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.card}>
        <div className={styles.pictures}>
          <Skeleton
            height={200}
            style={{
              borderRadius: "10px",
              margin: "0 auto",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </div>
        <div className={styles.card__footer}>
          <div className={styles.platforms}>
            <Skeleton
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <div className={styles.title}>
            <Skeleton />
          </div>
          <div className={styles.description}>
            <ul className={styles.description__items}>
              <Skeleton />
              <Skeleton />
            </ul>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
