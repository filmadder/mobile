import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import FaNavigatorOuter from './app/components/navigation/NavigatorOuter';
import { StatusBar } from 'react-native';
import reducers from './app/redux/reducers';

const Fa: () => React$Node = () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <Provider store={store}>
        <FaNavigatorOuter />
      </Provider>
    </>
  );
};

export default Fa;