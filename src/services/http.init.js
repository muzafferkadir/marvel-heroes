import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apikey: process.env.VUE_APP_API_KEY,
  },
});

export default http;
