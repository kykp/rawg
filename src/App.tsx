import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
        search: "",
      })
    );
  }, [dispatch, platforms.id]);

  useEffect(() => {
    dispatch(fetchPlatforms());
  }, [dispatch]);
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
