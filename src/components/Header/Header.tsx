import React from "react";
import styles from "./header.module.scss";
import Logo from "../../assets/images/logo.png";

import clsx from "clsx";
import { Input } from "./Input";

export const Header = () => {
  console.log("render Header");
  return (
    <header className={clsx(styles.header, styles.page)}>
      <div className={styles.logo}>
        <img src={Logo} alt="Woolf Logo" />
      </div>
      <div className={styles.search}>
        <Input />
      </div>
    </header>
  );
};
