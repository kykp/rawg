import React from "react";
import styles from "../catalog.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Cskeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.wrapper}>
        <div className={styles.game}>
          <Skeleton
            height={200}
            style={{
              borderRadius: "10px",
              margin: "0 auto",
              justifyContent: "center",
              display: "flex",
            }}
          />
          <Skeleton
            height={200}
            style={{
              borderRadius: "10px",
              margin: "0 auto",
              justifyContent: "center",
              display: "flex",
            }}
          />
          <Skeleton
            height={200}
            style={{
              borderRadius: "10px",
              margin: "0 auto",
              justifyContent: "center",
              display: "flex",
            }}
          />
          <Skeleton
            height={500}
            style={{
              borderRadius: "10px",
              margin: "0 auto",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </div>
      </div>
    </SkeletonTheme>
  );
};
