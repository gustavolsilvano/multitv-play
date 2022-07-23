import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import Input from '../../components/Form/Input';
import Image from '../../components/Image';
import {IMAGES} from '../../utils/constants';
import styles from './styles';

const LoginScreen = () => {
  // RENDER
  return useMemo(
    () => (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image src={IMAGES.LOGO} style={styles.logo} />
          <Input label="Usuário" />
          <Input label="Senha" />
        </View>
      </View>
    ),
    [],
  );
};

export default LoginScreen;
