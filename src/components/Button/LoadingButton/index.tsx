import React, {useMemo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LoadingButton = ({callback, label, isLoading, containerStyle}) => {
  return useMemo(
    () => (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={callback}
        style={[styles.container, containerStyle]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </TouchableOpacity>
    ),
    [callback, containerStyle, isLoading, label],
  );
};

export default LoadingButton;
