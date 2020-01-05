import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import FaNavigatorOuter from './app/components/navigation/NavigatorOuter';
import FaNavigatorInner from './app/components/navigation/NavigatorInner';
import Storage from './app/Storage'
import { StatusBar } from 'react-native';
import reducers from './app/redux/reducers';

const Fa: () => React$Node = () => {
  const [authorised, setAuthorised] = React.useState(true);
  const content = authorised ? <FaNavigatorInner /> : <FaNavigatorOuter />;

  const store = createStore(reducers)

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      <Storage />
      <Provider store={store}>
        {content}
      </Provider>
    </>
  );
};

export default Fa;