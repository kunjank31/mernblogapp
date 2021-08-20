import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://codingtadkablog.herokuapp.com/",
  baseURL: "http://localhost:8080",
});
