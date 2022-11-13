import { Game } from "../store/games/gamesSlice";

export const sortingArrayByRating = (
  array: Game[],
  sortingDateDesc: boolean
) => {
  const arraySortedByRating = [...array].sort((a, b) => {
    const objA = a.rating;
    const objB = b.rating;
    return sortingDateDesc ? objB - objA : objA - objB;
  });
  return arraySortedByRating;
};
