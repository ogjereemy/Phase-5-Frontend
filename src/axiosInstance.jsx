// src/axiosInstance.js
import axios from 'axios';
import { logout } from './auth';

const instance = axios.create({
  baseURL: 'https://fitt-track.onrender.com',
});

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post('/refresh', null, { withCredentials: true });
        const newAccessToken = response.data.access_token;
        localStorage.setItem('token', newAccessToken);

        // Update the Authorization header with the new access token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return instance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token expired or invalid', refreshError);
        // Handle logout or redirect to login page
        logout();
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
