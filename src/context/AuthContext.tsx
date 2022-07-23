import React, {useState, createContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);

  // FUNCTIONS
  const handleLogin = () => {
    console.log('handle login');
  };

  return (
    <AuthContext.Provider value={{token, handleLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
