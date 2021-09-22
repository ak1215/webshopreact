import React, { createContext, FC, useState } from 'react'
import { LoginContextStatus } from './LoginContextStatus'

const contextDefaultValues : LoginContextStatus = {
    isAuthenticated: false,
    login:  () => {}
};

export const LoginContext = createContext<LoginContextStatus>(
    contextDefaultValues
);

const LoginContextProvider: FC = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const login = () => setIsAuthenticated(true);

    return( 
        <LoginContext.Provider value={{
            isAuthenticated,
            login
        }}>
            {children}
        </LoginContext.Provider>
        
    );

} 
export default LoginContextProvider