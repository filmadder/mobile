import React from 'react';
import {StatusBar} from 'react-native';
import {AppearanceProvider} from 'react-native-appearance';
import Theme from './app/components/Theme';
import FaNavigator from './app/components/navigation/Navigator';

const Fa = () => {
  return (
    <>
      <AppearanceProvider>
        <Theme>
          <StatusBar barStyle="light-content" />
          <FaNavigator />
        </Theme>
      </AppearanceProvider>
    </>
  );
};

export default Fa;
