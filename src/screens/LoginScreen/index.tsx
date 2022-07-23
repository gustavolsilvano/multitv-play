import React, {useEffect, useMemo} from 'react';
import {View} from 'react-native';
import LoadingButton from '../../components/Button/LoadingButton';
import Input from '../../components/Form/Input';
import Image from '../../components/Image';
import useAuth from '../../hooks/useAuth';
import {IMAGES, SIZES} from '../../utils/constants';
import styles from './styles';
import {useForm} from 'react-hook-form';

const LoginScreen = () => {
  // HOOKS
  const {handleLogin, isLoading} = useAuth();

  // FORM
  const {register, handleSubmit, watch, setValue, formState, reset} = useForm({
    defaultValues: {
      user: null,
      password: null,
    },
  });
  useEffect(() => {
    register('user');
    register('password');
  }, []);
  const values = watch();
  const {errors} = formState;

  // FUNCTION
  const onSubmit = () => {
    handleSubmit(_handleLogin)();
  };

  const _handleLogin = async () => {
    await handleLogin({user: values.user, password: values.password});
  };

  // RENDER
  return useMemo(
    () => (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image src={IMAGES.LOGO} style={styles.logo} />
          <Input label="Usuário" setValue={setValue} id="user" />
          <Input
            label="Senha"
            setValue={setValue}
            id="password"
            type="password"
          />
          <LoadingButton
            callback={onSubmit}
            label="Entrar"
            containerStyle={{marginTop: SIZES.size_20}}
            isLoading={isLoading}
          />
        </View>
      </View>
    ),
    [isLoading, onSubmit, setValue],
  );
};

export default LoginScreen;
