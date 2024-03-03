import axios from "axios";

const api = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/",
  headers: {
    "X-CMC_PRO_API_KEY": "552675b6-f913-4a97-adcc-bdbf6ccd37d9",
  },
});

export default api;
