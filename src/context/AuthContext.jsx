// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();

    const login = (username, password) => {
        // Replace with actual login logic
        setAuth({ username });
        navigate('/dashboard');
    };

    const logout = () => {
        setAuth(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
