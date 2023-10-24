import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:8800",
});

export default baseUrl;
