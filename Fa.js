import React from 'react';
import {AppearanceProvider} from 'react-native-appearance';
import ThemeProvider from './app/providers/ThemeProvider';
import UserProvider from './app/providers/UserProvider';
import FaNavigator from './app/components/navigation/Navigator';

const Fa = () => {
  return (
    <>
      <AppearanceProvider>
        <UserProvider>
          <ThemeProvider>
            <FaNavigator />
          </ThemeProvider>
        </UserProvider>
      </AppearanceProvider>
    </>
  );
};

export default Fa;
