const BASE_URL = `https://api.coinpaprika.com/v1`;
// https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}

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