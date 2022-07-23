import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import useAuth from '../hooks/useAuth';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  // HOOKS
  const {token} = useAuth();

  // MEMO
  const isAuthenticated = useMemo(() => {
    return token != null;
  }, [token]);

  // RENDER
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
