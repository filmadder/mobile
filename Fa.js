import React from 'react';

import FaNavigatorOuter from './app/components/navigation/NavigatorOuter';
import { StatusBar } from 'react-native';
// import reducers from './app/redux/reducers';

const Fa: () => React$Node = () => {
  // const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
        <FaNavigatorOuter />
    </>
  );
};

export default Fa;