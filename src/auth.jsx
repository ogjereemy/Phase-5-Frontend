// src/auth.js
export const logout = () => {
    localStorage.removeItem('token');
    // Optionally clear other user-related data
    window.location.href = '/login'; // Redirect to login page
  };
  