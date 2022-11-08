import React from "react";

import { Header } from "./components/Header/Header.tsx";
import { MainContent } from "./components/MainContent/MainContent.tsx";
import "./index.module.scss";

function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}

export default App;
