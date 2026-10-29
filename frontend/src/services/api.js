import axios from 'axios';

const api = axios.create({
  baseURL: "https://blog-application-five-wine.vercel.app/api",
  withCredentials: true,
});

export default api;
