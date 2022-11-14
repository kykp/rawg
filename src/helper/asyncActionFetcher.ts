const API_URL = `https://api.rawg.io/api/`;
const api_key = process.env.REACT_APP_API_KEY;
export const asyncActionFetcher = async (url: string) => {
  return await fetch(`${API_URL}${url}?key=${api_key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
