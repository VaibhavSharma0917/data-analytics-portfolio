import axios from "axios";

const api = axios.create({
  baseURL: "https://data-analytics-portfolio-g9wi.onrender.com/api",
});

export default api;