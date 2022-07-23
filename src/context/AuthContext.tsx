import React, {useState, createContext} from 'react';
import storage from '../commons/storage';
import authRoutes from '../service/authRoutes';
import {LOCAL_STORAGE} from '../utils/constants';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(null);

  // FUNCTIONS
  const handleLogin = async ({user, password}) => {
    try {
      setIsLoading(true);
      const result = await authRoutes.login({user, password});
      setAuth(result.data);
      await storage.storeData({
        key: LOCAL_STORAGE.TOKEN,
        value: result.data.token,
      });
    } catch (err) {
      console.log('AUTH_CONTEXT ==> handleLogin', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialization = async () => {
    const result = await storage.getData(LOCAL_STORAGE.TOKEN);
    setAuth(result);
  };

  return (
    <AuthContext.Provider
      value={{auth, handleLogin, isLoading, handleInitialization}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
