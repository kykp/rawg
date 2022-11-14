import React from "react";
import styles from "../catalog.module.scss";
import { Slider } from "../../../components/Slider/Slider";
import { SynteticObj } from "../../../store/game/gameSlice";

type TCslider = {
  currentScreens: SynteticObj[];
};

export const Cslider = ({ currentScreens }: TCslider) => {
  return (
    <div className={styles.slider}>
      <span className={styles.slider_title}>Screenshots:</span>
      <Slider>
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
