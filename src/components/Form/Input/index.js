import React, {useMemo} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const Input = ({label, setValue, id, type = '', errorMessage = null}) => {
  // FUNCTIONS
  const _onChange = event => {
    return setValue(id, event.nativeEvent.text);
  };

  // RENDER
  return useMemo(
    () => (
      <View style={styles.container}>
        <TextInput
          secureTextEntry={type === 'password'}
          onChange={_onChange}
          placeholder={label}
          style={styles.input}
          placeholderTextColor="#000"
        />
        {errorMessage != null && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    ),
    [],
  );
};

export default Input;
