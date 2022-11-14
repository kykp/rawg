const API_URL = `https://api.rawg.io/api/games`;
const api_key = process.env.REACT_APP_API_KEY;
export const asyncActionFetcherGames = async (url: string) => {
  return await fetch(`${API_URL}?key=${api_key}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
