import {useContext} from 'react';
import ChannelContext from '../context/ChannelContext';

const useChannel = () => {
  return useContext(ChannelContext);
};

export default useChannel;
