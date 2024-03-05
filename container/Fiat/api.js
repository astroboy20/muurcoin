import axios from "axios";
const apiKey = process.env.CONMARKET_API
const api = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/",
  headers: {
    "X-CMC_PRO_API_KEY":apiKey ,
  },
});

export default api;
