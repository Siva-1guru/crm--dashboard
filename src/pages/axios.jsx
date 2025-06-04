// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000',
// });

// export default instance;
// src/pages/axios.jsx
import axios from "axios";

// Create axios instance
const instance = axios.create({
  baseURL: "http://localhost:5000", // Add /api if your backend uses it
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Optional: adds timeout for requests (10 seconds)
});

// Optional: Add interceptors (e.g., for auth token or logging)
instance.interceptors.request.use(
  (config) => {
    // Example: If you want to include token in future
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: handle errors globally
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default instance;
