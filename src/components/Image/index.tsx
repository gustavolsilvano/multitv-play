import React, {useMemo} from 'react';
import {Image as RNImage} from 'react-native';
import styles from './styles';

const Image = ({src, style}) => {
  return useMemo(
    () => <RNImage source={src} style={[styles.container, style]} />,
    [],
  );
};

export default Image;
