import React from "react";

import styles from "./gamesGallery.module.scss";
import { useAppSelector } from "../../helper/hook";
import { GameCard } from "../GameCard/GameCard";
import { CardSceleton } from "../CardSceleton/CardSceleton";

const plugsNumbers = 8;

export const GamesGallery = () => {
  const data = useAppSelector((store) => store.games.games);

  return (
    <div className={styles.gamesGallery}>
      {data.length === 0
        ? [...Array(plugsNumbers)].map((e, i) => <CardSceleton key={i} />)
        : data.map((card) => <GameCard key={card.slug} {...card} />)}
    </div>
  );
};
