import React from "react";
import styles from "./leftMenuItem.module.scss";

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

export const LeftMenuItem = ({ name }: Platform) => {
  return (
    <>
      {name === "Web" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Web fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "SEGA" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Sega fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Neo Geo" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Neogeo fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Commodore / Amiga" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Commodore fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Atari" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Atari fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "3DO" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Do fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "PC" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Windows fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "PlayStation" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <PS fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Xbox" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Xbox fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Apple Macintosh" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Ios fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Nintendo" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Nintendo fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Android" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Android fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
      {name === "Linux" ? (
        <li className={styles.item}>
          <span className={styles.item_img}>
            <Linux fill="white" className={styles.image} />
          </span>
          <span className={styles.item_title}>{name}</span>
        </li>
      ) : null}
    </>
  );
};
