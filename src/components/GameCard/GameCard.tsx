import React from "react";
import { Link } from "react-router-dom";
import styles from "./gameCard.module.scss";

import { Game } from "../../store/games/gamesSlice";
import { CardsPlatfotmIcons } from "../CardsPlatfotmIcons/CardsPlatfotmIcons";
import { CardGenres } from "../CardGenres/CardGenres";
import { CardImage } from "../CardImage/CardImage";

export const GameCard = ({
  slug,
  name,
  released,
  background_image,
  rating,
  parent_platforms,
  genres,
}: Game) => {
  return (
    <div className={styles.card}>
      <Link to={`/game/${slug}`} className={styles.card_link}>
        <div className={styles.pictures}>
          <CardImage image={background_image} name={name} />
        </div>
      </Link>
      <div className={styles.card__footer}>
        <div className={styles.platforms}>
          <ul className={styles.platforms_items}>
            {parent_platforms?.map((el) => (
              <CardsPlatfotmIcons key={el.platform.id} {...el} />
            ))}
          </ul>
        </div>

        <Link to={`/game/${slug}`}>
          <div className={styles.title}>{name}</div>
        </Link>

        <div className={styles.description}>
          <ul className={styles.description__items}>
            <li className={styles.description__item}>
              <div>
                <p>release date:</p>
              </div>
              <div>
                <p>{released}</p>
              </div>
            </li>
            <li className={styles.description__item}>
              <div>
                <p>genres:</p>
              </div>
              <div className={styles.description__genres}>
                {genres?.map((el) => (
                  <CardGenres key={el.id} {...el} />
                ))}
              </div>
            </li>
            <li className={styles.description__item}>
              <div>
                <p>rating:</p>
              </div>
              <div className={styles.description__genres}>{rating}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
