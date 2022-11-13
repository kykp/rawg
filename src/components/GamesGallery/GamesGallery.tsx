import React from "react";
import { NotFound } from "../NotFound/NotFound";
import styles from "./gamesGallery.module.scss";
import { useAppSelector } from "../../helper/hook";
import { GameCard } from "../GameCard/GameCard";
import { CardSceleton } from "../CardSceleton/CardSceleton";
import {
  selectGamesByFilter,
  selectResearchResults,
} from "../../store/games/selectors";

const plugsSkeletonNumbers = 10;

export const GamesGallery = () => {
  const data = useAppSelector(selectGamesByFilter);
  const searchCounter = useAppSelector(selectResearchResults);
  if (searchCounter === 0) return <NotFound />;
  return (
    <div className={styles.gamesGallery}>
      {data?.length
        ? data.map((card) => <GameCard key={card.slug} {...card} />)
        : [...Array(plugsSkeletonNumbers)].map((e, i) => (
            <CardSceleton key={i} />
          ))}
    </div>
  );
};
