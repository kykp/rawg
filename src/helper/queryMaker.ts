type EmptyObjec = {
  [K in any]: any;
};

const API_URL = "http://localhost:3000";

export const queryMaker = async (url: string, data?: EmptyObjec) => {
  return await fetch(
    `${API_URL}${url}`,
    data
      ? {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      : {}
  );
};
