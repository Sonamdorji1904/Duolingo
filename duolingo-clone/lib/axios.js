// lib/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // backend base URL
  withCredentials: true, // include cookies if auth uses them
});

export default api;