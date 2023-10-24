import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://booking-nodejs.vercel.app",
});

export default baseUrl;
