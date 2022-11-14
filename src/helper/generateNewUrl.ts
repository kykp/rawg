export const generateNewUrl = (
  platformId: number | null,
  isDateSort: boolean,
  isRatingSort: boolean,
  isSortDirectionDec: boolean,
  ordering: string,
  page: number,
  search: string
) => {
  let currentUrl = ``;
  if (search !== "") {
    currentUrl += `&search=${search}`;
  }
  if (page) {
    currentUrl += `&page=${page}`;
  }
  if (isDateSort) {
    currentUrl += `&ordering=${
      isSortDirectionDec ? `-${ordering}` : `${ordering}`
    }`;
  }
  if (isRatingSort) {
    currentUrl += `&ordering=${
      isSortDirectionDec ? `-${ordering}` : `${ordering}`
    }`;
  }
  if (platformId !== null && platformId > 0) {
    currentUrl += `&parent_platforms=${platformId}`;
  }

  return currentUrl;
};
