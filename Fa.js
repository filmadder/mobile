import React from 'react';
import {StatusBar} from 'react-native';
import {AppearanceProvider} from 'react-native-appearance';

import FaNavigator from './app/components/navigation/Navigator';

const Fa = () => {
  return (
    <>
      <AppearanceProvider>
        <StatusBar barStyle="light-content"></StatusBar>
        <FaNavigator />
      </AppearanceProvider>
    </>
  );
};

export default Fa;
