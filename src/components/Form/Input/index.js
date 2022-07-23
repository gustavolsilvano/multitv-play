import React, {useMemo} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const Input = ({label}) => {
  return useMemo(
    () => (
      <View style={styles.container}>
        <TextInput
          placeholder={label}
          style={styles.input}
          placeholderTextColor="#000"
        />
      </View>
    ),
    [],
  );
};

export default Input;
