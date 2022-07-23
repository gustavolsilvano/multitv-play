import React, {useMemo} from 'react';
import {View} from 'react-native';
import CustomVideo from '../../components/CustomVideo';
import styles from './styles';

const HomeScreen = () => {
  return useMemo(
    () => (
      <View style={styles.container}>
        <CustomVideo videoUrl="https://cdnhomolog.multtv.tv.br:8443/CanaldoBoi.m3u8" />
      </View>
    ),
    [],
  );
};

export default HomeScreen;
