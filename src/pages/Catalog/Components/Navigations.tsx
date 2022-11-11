import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "../catalog.module.scss";

type Name = {
  name: string;
};
export const Navigations = ({ name }: Name) => {
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];
  return (
    <div className={styles.navigations}>
      <Link to="/">
        <span className={styles.navigations_text}>Home </span>
      </Link>
      <span className={styles.navigations_attribute}>|</span>
      <span className={styles.navigations_text}>{currentLocation} </span>
      <span className={styles.navigations_attribute}>|</span>
      <span className={styles.navigations_text}>{name}</span>
    </div>
  );
};
