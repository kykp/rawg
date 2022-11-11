import React from "react";
import styles from "../catalog.module.scss";
import { Slider } from "../../../components/Slider/Slider";
import { SynteticObj } from "../../../store/game/gameSlice";

type TCslider = {
  currentScreens: SynteticObj[];
};

const slideWidth = window.innerWidth / 2 || 800;

export const Cslider = ({ currentScreens }: TCslider) => {
  return (
    <div className={styles.slider}>
      <span className={styles.slider_title}>Screenshots:</span>
      <Slider width={slideWidth}>
        {currentScreens.map((el: any) => (
          <div className={styles.item} key={el.id}>
            <img
              style={{
                width: `100%`,
                height: `100%`,
              }}
              src={el.image}
              alt={el.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
