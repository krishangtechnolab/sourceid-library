// src/config/axiosConfig.ts

import axios from "axios";

const instance = axios.create({
  baseURL: "https://source-id-api-dev.vercel.app",
});

export default instance;
