import React from "react";

import styles from "./cardsPlatfotmIcons.module.scss";
import { ReactComponent as Windows } from "../../assets/images/leftMenu/windows.svg";
import { ReactComponent as Xbox } from "../../assets/images/leftMenu/xbox.svg";
import { ReactComponent as PS } from "../../assets/images/leftMenu/ps.svg";
import { ReactComponent as Nintendo } from "../../assets/images/leftMenu/nintendo.svg";
import { ReactComponent as Ios } from "../../assets/images/leftMenu/ios.svg";
import { ReactComponent as Android } from "../../assets/images/leftMenu/android.svg";
import { ReactComponent as Linux } from "../../assets/images/leftMenu/linux.svg";
import { ReactComponent as Do } from "../../assets/images/leftMenu/3do.svg";
import { ReactComponent as Atari } from "../../assets/images/leftMenu/atari.svg";
import { ReactComponent as Commodore } from "../../assets/images/leftMenu/commodore.svg";
import { ReactComponent as Neogeo } from "../../assets/images/leftMenu/neogeo.svg";
import { ReactComponent as Sega } from "../../assets/images/leftMenu/sega.svg";
import { ReactComponent as Web } from "../../assets/images/leftMenu/web.svg";

import { ParentPlatforms } from "../../store/games/gamesSlice";

export const CardsPlatfotmIcons = ({ platform }: ParentPlatforms) => {
  return (
    <>
      <li>
        {platform.name === "3DO" ? (
          <Do
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Atari" ? (
          <Atari
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Commodore / Amiga" ? (
          <Commodore
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Neo Geo" ? (
          <Neogeo
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "SEGA" ? (
          <Sega
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Web" ? (
          <Web
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "PC" ? (
          <Windows
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "PlayStation" ? (
          <PS
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Xbox" ? (
          <Xbox
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Apple Macintosh" ? (
          <Ios
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Nintendo" ? (
          <Nintendo
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Android" ? (
          <Android
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
        {platform.name === "Linux" ? (
          <Linux
            fill="white"
            className={styles.platforms_image}
            title={platform.name}
          />
        ) : null}
      </li>
    </>
  );
};
