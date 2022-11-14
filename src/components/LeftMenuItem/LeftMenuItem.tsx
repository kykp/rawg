import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import { Link } from "react-router-dom";
import styles from "./leftMenuItem.module.scss";

import { addFilter, sortingDesc } from "../../store/games/gamesSlice";
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

type TIcons = {
  [index: string]: React.ComponentClass<any>;
};
const arrayIcons: TIcons = {
  PC: Windows,
  Xbox: Xbox,
  PlayStation: PS,
  Nintendo: Nintendo,
  "Apple Macintosh": Ios,
  iOS: Ios,
  Android: Android,
  Linux: Linux,
  "3DO": Do,
  Atari: Atari,
  "Commodore / Amiga": Commodore,
  "Neo Geo": Neogeo,
  SEGA: Sega,
  Web: Web,
};
export const LeftMenuItem = ({ id, name, slug }: Platform) => {
  const dispatch = useAppDispatch();
  const Icon = arrayIcons[name];
  const onHandleClick = () => {
    dispatch(addFilter({ id, slug }));
  };

  if (Icon) {
    return (
      <li onClick={onHandleClick}>
        <Link to="/" className={styles.item}>
          <span className={styles.item_img}>
            <Icon fill="white" className={styles.image} title={name} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </Link>
      </li>
    );
  } else {
    return <></>;
  }
};
