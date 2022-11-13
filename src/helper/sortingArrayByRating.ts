import { Game } from "../store/games/gamesSlice";

export const sortingArrayByRating = (
  array: Game[],
  sortingDateDesc: boolean
) => {
  const newArray = array.filter((el) => el.rating !== 0);
  const arraySortedByRating = [...newArray].sort((a, b) => {
    const objA = a.rating;
    const objB = b.rating;
    return sortingDateDesc ? objB - objA : objA - objB;
  });
  return arraySortedByRating;
};
