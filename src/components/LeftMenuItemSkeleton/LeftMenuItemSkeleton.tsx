import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LeftMenuItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <li>
        <span>
          <Skeleton />
        </span>
      </li>
    </SkeletonTheme>
  );
};
