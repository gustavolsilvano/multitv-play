import React, {useState, createContext} from 'react';
import useAuth from '../hooks/useAuth';
import channelRoutes from '../service/channelRoutes';

const ChannelContext = createContext();

export const ChannelProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [channels, setChannels] = useState(null);

  // HOOKS
  const {auth} = useAuth();

  // FUNCTIONS
  const handleGetChannels = async () => {
    try {
      setIsLoading(true);
      const result = await channelRoutes.get({token: auth.token});
      setChannels(result?.data?.canais);
    } catch (err) {
      console.log('AUTH_CONTEXT ==> handleGetChannels', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChannelContext.Provider value={{channels, handleGetChannels, isLoading}}>
      {children}
    </ChannelContext.Provider>
  );
};

export default ChannelContext;
