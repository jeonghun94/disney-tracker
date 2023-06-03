export const characters = () => {
  return fetch("https://disney_api.nomadcoders.workers.dev/characters").then(
    (response) => response.json()
  );
};

export const character = (id: number) => {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${id}`
  ).then((response) => response.json());
};
