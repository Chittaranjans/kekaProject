import React, { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [userData, setUserData] = useState(() => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : undefined;
    });

    useEffect(() => {
        const user = localStorage.getItem('userData');
        if (user) {
            setUserData(JSON.parse(user));
        }
    }, []);

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            {children}
        </UserContext.Provider>
    );
}

export const useAuth = () => useContext(UserContext);