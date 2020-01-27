import React from 'react';

import FaNavigator from './app/components/navigation/Navigator';
import { StatusBar } from 'react-native';
// import reducers from './app/redux/reducers';

const Fa: () => React$Node = () => {
  // const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
        <FaNavigator />
    </>
  );
};

export default Fa;