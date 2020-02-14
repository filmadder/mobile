import React from 'react';
import { StatusBar } from 'react-native';

import FaNavigator from './app/components/navigation/Navigator';

const Fa = () => {

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <FaNavigator />
    </>
  );
};

export default Fa;