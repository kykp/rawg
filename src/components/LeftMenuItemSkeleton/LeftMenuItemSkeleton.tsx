import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./leftMenuItemSkeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export const LeftMenuItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <li className={styles.item}>
        <span className={styles.item_img}>
          <Skeleton />
        </span>
        <span className={styles.item_title}>
          <Skeleton width={100} />
        </span>
      </li>
    </SkeletonTheme>
  );
};
