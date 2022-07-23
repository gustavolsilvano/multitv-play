import React, {useEffect, useMemo} from 'react';
import {FlatList, View} from 'react-native';
import useChannel from '../../../hooks/useChannel';
import ChannelButton from '../ChannelButton';
import styles from './styles';

const ChannelList = () => {
  // HOOKS
  const {handleGetChannels, channels} = useChannel();

  // FUNCTION
  const _handleGetChannels = async () => {
    await handleGetChannels();
  };

  // EFFECT
  useEffect(() => {
    _handleGetChannels();
  }, []);

  // RENDER
  return useMemo(
    () => (
      <View style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={channels}
          renderItem={({item}) => {
            return (
              <ChannelButton
                label={item.nome}
                currentShow={item.agora}
                logo={item.logo}
              />
            );
          }}
          keyExtractor={item => item.num}
        />
      </View>
    ),
    [channels],
  );
};

export default ChannelList;
