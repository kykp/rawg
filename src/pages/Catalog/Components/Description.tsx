import React from "react";
import styles from "../catalog.module.scss";
import { ParentPlatforms, SynteticObj } from "../../../store/game/gameSlice";

type TDescription = {
  parent_platforms: ParentPlatforms[];
  genres: SynteticObj[];
  developers: SynteticObj[];
  tags: SynteticObj[];
  website: string;
  released: string;
};

export const Description = ({
  parent_platforms,
  genres,
  developers,
  tags,
  website,
  released,
}: TDescription) => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about_item}>
          <span className={styles.about_title}>Platform:</span>
          {parent_platforms?.map((el) => (
            <p key={el.platform.id} className={styles.tags_p}>
              {el.platform.name}
            </p>
          ))}
        </div>
        <div className={styles.about_item}>
          <span className={styles.about_title}>Genre:</span>
          {genres?.map((el) => (
            <p key={el.id} className={styles.tags_p}>
              {el.name}
            </p>
          ))}
        </div>
        <div className={styles.about_item}>
          <span className={styles.about_title}>Developer:</span>
          {developers?.map((el) => (
            <p key={el.id} className={styles.tags_p}>
              {el.name}
            </p>
          ))}
        </div>
        <div className={styles.about_item}>
          <span className={styles.about_title}>Website:</span>
          <p className={styles.tags_p}>{website}</p>
        </div>
        <div className={styles.about_item}>
          <span className={styles.about_title}>Release date:</span>
          <p className={styles.tags_p}>{released}</p>
        </div>
      </div>
      <div className={styles.tags}>
        <span className={styles.tags_title}>Tags:</span>
        <div className={styles.tags_items}>
          {tags?.map((el) => (
            <p key={el.id} className={styles.tags_p}>
              {el.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
