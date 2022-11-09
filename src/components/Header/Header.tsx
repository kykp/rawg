import React, { useState } from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/logo.png";
import { useAppDispatch } from "../../helper/hook";
import { fetchGamesBySearch } from "../../store/games/asyncActions";
import { addSearch } from "../../store/games/gamesSlice";

import clsx from "clsx";

export const Header = () => {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();

  const onHandleChange = (e: any) => {
    setSearch(e.currentTarget.value);
  };

  const onHandleClick = () => {
    dispatch(addSearch({ search }));
    dispatch(fetchGamesBySearch({ search }));
  };
  return (
    <header className={clsx(styles.header, styles.page)}>
      <div className={styles.logo}>
        <img src={Logo} alt="Woolf Logo" />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Game Search"
          className={styles.search_input}
          value={search}
          onChange={onHandleChange}
        />
        <button className={styles.button} onClick={onHandleClick}>
          Search
        </button>
      </div>
    </header>
  );
};
