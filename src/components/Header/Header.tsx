import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/logo.png";

import clsx from "clsx";

export const Header = () => {
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
        />
        <button className={styles.button}>Search</button>
      </div>
    </header>
  );
};
