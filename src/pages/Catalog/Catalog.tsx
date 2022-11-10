import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { CardsPlatfotmIcons } from "../../components/CardsPlatfotmIcons/CardsPlatfotmIcons";
import { useAppDispatch, useAppSelector } from "../../helper/hook";
import { fetchGameDetails } from "../../store/game/asyncActions";
import { selectCurrentGame } from "../../store/game/selectors";
// import { Slider } from "../../components/Slider/Slider";

import styles from "./catalog.module.scss";

export const Catalog = () => {
  const currentGame = useAppSelector(selectCurrentGame);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const slug = useParams();
  const currentLocation = location.pathname.split("/")[1];

  const { name, parent_platforms, background_image, description } = currentGame;

  useEffect(() => {
    if (slug.id) {
      dispatch(fetchGameDetails({ slug: slug.id }));
    }
  }, [dispatch, slug.id]);

  console.log(currentLocation);
  console.log(currentGame);
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>{/* <Slider /> */}</div>
      {/* <div className={styles.game}>
        <div className={styles.navigations}>
          <Link to="/">
            <span className={styles.navigations_text}>Home </span>
          </Link>
          <span className={styles.navigations_attribute}>|</span>
          <span className={styles.navigations_text}>{currentLocation} </span>
          <span className={styles.navigations_attribute}>|</span>
          <span className={styles.navigations_text}>{name}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.platforms}>
              {parent_platforms?.map((el) => (
                <CardsPlatfotmIcons key={el.platform.id} {...el} />
              ))}
            </div>
            <div className={styles.pictures}>
              <img src={background_image} alt={name} />
            </div>
            <div className={styles.descriptions}>
              <span dangerouslySetInnerHTML={{ __html: description }}></span>
            </div>
            <div className={styles.genres}></div>
           
          </div>
        </div>
      </div> */}
    </div>
  );
};
