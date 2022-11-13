import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

import clsx from "clsx";
import { Input } from "./Input";
import { useAppDispatch } from "../../helper/hook";
import { clearFilter } from "../../store/games/gamesSlice";
import { fetchGames } from "../../store/games/asyncActions";

export const Header = () => {
  const dispatch = useAppDispatch();
  const onHandleClick = () => {
    dispatch(clearFilter());
    dispatch(
      fetchGames({
        platformId: null,
        isDateSort: false,
        isRatingSort: false,
        isSortDirectionDec: true,
        ordering: "",
        page: 1,
        search: "",
      })
    );
  };
  return (
    <header className={clsx(styles.header, styles.page)}>
      <div className={styles.logo} onClick={onHandleClick}>
        <Link to="/">
          <img src={Logo} alt="Woolf Logo" />
        </Link>
      </div>
      <div className={styles.search}>
        <Input />
      </div>
    </header>
  );
};
