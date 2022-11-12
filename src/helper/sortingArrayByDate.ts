import { Game } from "../store/games/gamesSlice";

export const sortingArrayByDate = (array: Game[], sortingDateDesc: boolean) => {
  const arraySortedByDate = [...array].sort((a, b) => {
    const objA = new Date(a.released);
    const objB = new Date(b.released);
    return sortingDateDesc
      ? objB.getTime() - objA.getTime()
      : objA.getTime() - objB.getTime();
  });
  return arraySortedByDate;
};
