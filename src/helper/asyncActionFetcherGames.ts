const API_URL = `https://api.rawg.io/api/games`;
const api_key = process.env.REACT_APP_API_KEY;
const limitDateFilter = "&dates=2010-01-01,2023-12-31.1960-01-01,1969-12-31";
const size = 40;
export const asyncActionFetcherGames = async (url: string) => {
  return await fetch(
    `${API_URL}?key=${api_key}&page_size=${size}&dates=${limitDateFilter}${url}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
