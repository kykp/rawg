import React, { useEffect } from "react";

import { Header } from "./components/Header/Header.tsx";
import { MainContent } from "./components/MainContent/MainContent.tsx";
import { useAppDispatch } from "./helper/hook";
import { fetchPlatforms } from "./store/platforms/asyncActions";
import { fetchGames } from "./store/games/asyncActions";
import "./index.module.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGames());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
