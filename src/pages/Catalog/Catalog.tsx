import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../helper/hook";
import {
  fetchGameDetails,
  fetchGameScreenshots,
} from "../../store/game/asyncActions";
import {
  selectCurrentGame,
  selectCurrentScreenshots,
  selectLoading,
} from "../../store/game/selectors";

import styles from "./catalog.module.scss";
import { Navigations } from "./Components/Navigations";
import { Header } from "./Components/Header";
import { Description } from "./Components/Description";
import { Cslider } from "./Components/Cslider";
import { Cskeleton } from "./Components/Cskeleton";

export const Catalog = () => {
  const currentGame = useAppSelector(selectCurrentGame);
  const currentScreens = useAppSelector(selectCurrentScreenshots);
  const isLoading = useAppSelector(selectLoading);

  const dispatch = useAppDispatch();
  const slug = useParams();

  const {
    name,
    parent_platforms,
    description,
    genres,
    background_image,
    developers,
    website,
    released,
    tags,
  } = currentGame;

  useEffect(() => {
    if (slug.id) {
      dispatch(fetchGameDetails({ slug: slug.id }));
      dispatch(fetchGameScreenshots({ slug: slug.id }));
    }
  }, [dispatch, slug.id]);

  return (
    <>
      {isLoading ? (
        <Cskeleton />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.game}>
            <Navigations name={name} />
            <Header
              name={name}
              parent_platforms={parent_platforms}
              background_image={background_image}
              description={description}
            />
            <Description
              parent_platforms={parent_platforms}
              genres={genres}
              developers={developers}
              tags={tags}
              website={website}
              released={released}
            />
            <Cslider currentScreens={currentScreens} />
          </div>
        </div>
      )}
    </>
  );
};
