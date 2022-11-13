import React, { useRef } from "react";
import { useAppDispatch } from "../../helper/hook";
import { Link } from "react-router-dom";
import styles from "./leftMenuItem.module.scss";

import { addFilter } from "../../store/games/gamesSlice";
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
import { Platform } from "../../store/platforms/platformSlice";

export const LeftMenuItem = ({ id, name, slug }: Platform) => {
  const dispatch = useAppDispatch();

  const onHandleClick = () => {
    dispatch(addFilter({ id, slug }));
  };

  return (
    <li onClick={onHandleClick}>
      <Link to="/" className={styles.item}>
        <span className={styles.item_img}>
          {name === "Web" ? (
            <Web fill="white" className={styles.image} />
          ) : null}
          {name === "SEGA" ? (
            <Sega fill="white" className={styles.image} />
          ) : null}
          {name === "Neo Geo" ? (
            <Neogeo fill="white" className={styles.image} />
          ) : null}
          {name === "Commodore / Amiga" ? (
            <Commodore fill="white" className={styles.image} />
          ) : null}
          {name === "Atari" ? (
            <Atari fill="white" className={styles.image} />
          ) : null}
          {name === "3DO" ? <Do fill="white" className={styles.image} /> : null}
          {name === "PC" ? (
            <Windows fill="white" className={styles.image} />
          ) : null}
          {name === "PlayStation" ? (
            <PS fill="white" className={styles.image} />
          ) : null}
          {name === "Xbox" ? (
            <Xbox fill="white" className={styles.image} />
          ) : null}
          {name === "Apple Macintosh" || name === "iOS" ? (
            <Ios fill="white" className={styles.image} />
          ) : null}
          {name === "Nintendo" ? (
            <Nintendo fill="white" className={styles.image} />
          ) : null}
          {name === "Android" ? (
            <Android fill="white" className={styles.image} />
          ) : null}
          {name === "Linux" ? (
            <Linux fill="white" className={styles.image} />
          ) : null}
        </span>
        <span className={styles.item_title}>{name}</span>
      </Link>
    </li>
  );
};
