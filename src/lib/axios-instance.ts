import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.TMDB_BASE_URl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
});
