import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

import clsx from "clsx";
import { Input } from "./Input";

export const Header = () => {
  console.log("render Header");
  return (
    <header className={clsx(styles.header, styles.page)}>
      <div className={styles.logo}>
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
