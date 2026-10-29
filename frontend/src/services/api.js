import axios from 'axios';

const getBaseURL = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api';
  }
  return 'https://blog-application-five-wine.vercel.app/api';
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export default api;
