import React from "react";

import styles from "./gamesGallery.module.scss";
import { useAppSelector } from "../../helper/hook";
import { GameCard } from "../GameCard/GameCard";
import { CardSceleton } from "../CardSceleton/CardSceleton";
import {
  selectGamesByFilter,
  selectResearchResults,
} from "../../store/games/selectors";
import { SearchResult } from "../SearchResult/SearchResult";

const plugsNumbers = 10;

export const GamesGallery = () => {
  const data = useAppSelector(selectGamesByFilter);
  const searchResult = useAppSelector(selectResearchResults);

  if (searchResult === 0) {
    return <SearchResult />;
  }

  return (
    <div className={styles.gamesGallery}>
      {data.length
        ? data.map((card) => <GameCard key={card.slug} {...card} />)
        : [...Array(plugsNumbers)].map((e, i) => <CardSceleton key={i} />)}
    </div>
  );
};
