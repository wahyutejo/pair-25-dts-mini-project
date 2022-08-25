import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "e91464e1fb96937f74421990f4ae87ce" },
});



export { tmdb };
