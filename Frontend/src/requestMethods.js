import axios from "axios";

const BASE_URL = "http://localhost:8001/api/v1";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // Ensure requests are sent as JSON
  },
  withCredentials: true, // Include cookies for authentication if required
});
