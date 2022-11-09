import React, { useState } from "react";
import styles from "./header.module.scss";
import { useAppDispatch } from "../../helper/hook";
import { fetchGamesBySearch } from "../../store/games/asyncActions";
import { addSearch } from "../../store/games/gamesSlice";

export const Input = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const onHandleChange = (e: { target: HTMLInputElement }) => {
    setSearch(e.target.value);
  };

  const onHandleClick = () => {
    dispatch(addSearch({ search }));
    dispatch(fetchGamesBySearch({ search }));
    setSearch("");
  };

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      onHandleClick();
    }
  };
  console.log("header input");
  return (
    <>
      <input
        onKeyDown={onHandleKeyDown}
        type="text"
        placeholder="Game Search"
        className={styles.search_input}
        value={search}
        onChange={onHandleChange}
      />
      <button className={styles.button} onClick={onHandleClick}>
        Search
      </button>
    </>
  );
};
