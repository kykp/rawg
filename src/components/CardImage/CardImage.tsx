import React from "react";

import styles from "../GameCard/gameCard.module.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type TCardImage = {
  name: string;
  image: string;
};

export const CardImage = ({ image, name }: TCardImage) => (
  <div className={styles.pictures}>
    <LazyLoadImage alt={name} effect="blur" src={image} />
  </div>
);
