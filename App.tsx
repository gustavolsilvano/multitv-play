import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import createStoreProvider from './src/context/createStoreProvider';
import Router from './src/router/router';

const StoreProvider = createStoreProvider([AuthProvider]);

const App = () => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};

export default App;
