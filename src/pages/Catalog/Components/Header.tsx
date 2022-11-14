import React from "react";
import styles from "../catalog.module.scss";
import { ParentPlatforms } from "../../../store/game/gameSlice";
import { CardsPlatfotmIcons } from "../../../components/CardsPlatfotmIcons/CardsPlatfotmIcons";

type THeader = {
  name: string;
  parent_platforms: ParentPlatforms[];
  background_image: string;
  description: string;
};

export const Header = ({
  name,
  parent_platforms,
  background_image,
  description,
}: THeader) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{name}</h1>
      <ul className={styles.platforms}>
        {parent_platforms?.map((el) => (
          <CardsPlatfotmIcons key={el.platform.id} {...el} />
        ))}
      </ul>
      <div className={styles.top}>
        <div className={styles.pictures}>
          <img src={background_image} alt={name} />
        </div>
        <div className={styles.descriptions}>
          <h2>About</h2>
          <span
            dangerouslySetInnerHTML={{ __html: description }}
            className={styles.description_text}
          ></span>
        </div>
      </div>
    </div>
  );
};
