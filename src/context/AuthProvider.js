import React, { createContext } from 'react';
import AuthData from '../AuthData/AuthData';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const AllContext = AuthData();

    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;