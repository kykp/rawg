import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { LeftMenu } from "../LeftMenu/LeftMenu";

import styles from "./layout.module.scss";

import clsx from "clsx";

export const Layout = () => {
  return (
    <>
      <Header />;
      <main className={clsx(styles.main, styles.page)}>
        <LeftMenu />
        <Outlet />
      </main>
    </>
  );
};
