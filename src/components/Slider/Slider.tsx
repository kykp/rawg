import React, { useEffect, useState, Children, cloneElement } from "react";

import styles from "./slider.module.scss";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Screens = {
  children: any;
  width: number;
};

export const Slider = ({ children, width }: Screens) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const onHandleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const onHandleRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffest = -((pages.length - 1) * width);

      return Math.max(newOffset, maxOffest);
    });
  };
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
          },
        });
      })
    );
  }, [children, width]);

  return (
    <div className={styles.container} style={{ width: `${width}px` }}>
      <span className={styles.arrow_span} onClick={onHandleLeftClick}>
        <FaChevronLeft className={styles.arrow} />
      </span>

      <div className={styles.window}>
        <div
          className={styles.all_items}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <span className={styles.arrow_span} onClick={onHandleRightClick}>
        <FaChevronRight className={styles.arrow} />
      </span>
    </div>
  );
};

/* <img
            src="https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
            alt=""
          />
          <img
            src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
            alt=""
          />
          <img
            src="https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
            alt=""
          /> */
