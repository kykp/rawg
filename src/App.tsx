import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Header } from "./components/Header/Header.tsx";
import { MainContent } from "./components/MainContent/MainContent.tsx";
import { Catalog } from "./pages/Catalog/Catalog.tsx";
import { NotFound } from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";

import { useAppDispatch, useAppSelector } from "./helper/hook";
import { fetchPlatforms } from "./store/platforms/asyncActions";
import {
  fetchGames,
  fetchGamesSortingByDateRelease,
} from "./store/games/asyncActions";
import {
  selectSortDirectionByDate,
  selectSortDirectinByRating,
} from "./store/games/selectors";
import "./index.module.scss";

function App() {
  const dispatch = useAppDispatch();

  const isSortingDecByDate = useAppSelector(selectSortDirectionByDate);
  const isSortingDecByRating = useAppSelector(selectSortDirectinByRating);

  useEffect(() => {
    isSortingDecByDate !== "notActive"
      ? isSortingDecByDate === "true"
        ? dispatch(
            fetchGamesSortingByDateRelease({ sortDirectionByDateOnDec: true })
          )
        : dispatch(
            fetchGamesSortingByDateRelease({ sortDirectionByDateOnDec: false })
          )
      : dispatch(fetchGames());

    // isSortingDecByRating === "true"
    //   ? dispatch(fetchGames({ sortDirectionByDateOnDec: true }))
    //   : dispatch(fetchGames({ sortDirectionByDateOnDec: false }));

    dispatch(fetchPlatforms());
  }, [dispatch, isSortingDecByDate, isSortingDecByRating]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path="game/:id" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
