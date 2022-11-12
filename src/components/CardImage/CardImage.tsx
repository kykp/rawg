import React from "react";

import styles from "../GameCard/gameCard.module.scss";
import NOIMG from "../../assets/images/noimage.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type TCardImage = {
  name: string;
  image: string;
};

export const CardImage = ({ image, name }: TCardImage) =>
  image ? (
    <div className={styles.pictures}>
      <LazyLoadImage alt={name} effect="blur" src={image} />
    </div>
  ) : (
    <div className={styles.noimage__block}>
      <img className={styles.noimage__img} src={NOIMG} alt="noimage" />
    </div>
  );
