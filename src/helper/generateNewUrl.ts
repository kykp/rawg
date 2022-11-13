export const generateNewUrl = (
  currentUrl: string,
  isDateSort: boolean,
  isRatingSort: boolean,
  platformId: number | null,
  isSortDirectionDec: boolean,
  ordering: string,
  page: number,
  search: string
) => {
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
