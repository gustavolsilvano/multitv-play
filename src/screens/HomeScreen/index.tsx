import React, {useMemo} from 'react';
import {View} from 'react-native';
import ChannelList from '../../components/Channel/ChannelList';
import styles from './styles';

const HomeScreen = () => {
  return useMemo(
    () => (
      <View style={styles.container}>
        <ChannelList />
      </View>
    ),
    [],
  );
};

export default HomeScreen;
