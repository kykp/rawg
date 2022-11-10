import React from "react";
import { useAppSelector } from "../../helper/hook";

import { LeftMenuItem } from "../LeftMenuItem/LeftMenuItem";
import { LeftMenuItemSkeleton } from "../LeftMenuItemSkeleton/LeftMenuItemSkeleton";
import { Link } from "react-router-dom";
import styles from "./leftMenu.module.scss";

const plugsNumbers = 8;
export const LeftMenu = () => {
  const data = useAppSelector((state) => state.platforms.platforms);

  return (
    <div className={styles.leftMenu}>
      <div className={styles.leftMenu_sidebar}>
        <Link to="/">
          <span className={styles.leftMenu_sidebar_title}>Home</span>
        </Link>
      </div>
      <div className={styles.leftMenu_sidebar}>
        <span className={styles.leftMenu_sidebar_title}>Platforms</span>
        <ul className={styles.items}>
          {data.length === 0
            ? [...Array(plugsNumbers)].map((e, i) => (
                <LeftMenuItemSkeleton key={i} />
              ))
            : data.map((el) => <LeftMenuItem key={el.id} {...el} />)}
        </ul>
      </div>
    </div>
  );
};
