import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Header } from "./components/Header/Header.tsx";
import { MainContent } from "./components/MainContent/MainContent.tsx";
import { Catalog } from "./pages/Catalog/Catalog.tsx";
import { NotFound } from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";

import { useAppDispatch, useAppSelector } from "./helper/hook";
import { fetchPlatforms } from "./store/platforms/asyncActions";
import { fetchGames } from "./store/games/asyncActions";

import "./index.module.scss";
import { selectFilters } from "./store/games/selectors";

function App() {
  const dispatch = useAppDispatch();
  const platforms = useAppSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchGames({
        platformId: platforms.id,
        isDateSort: false,
        isRatingSort: false,
        isSortDirectionDec: true,
        ordering: "",
        page: 1,
      })
    );
    dispatch(fetchPlatforms());
  }, [dispatch, platforms.id]);

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
