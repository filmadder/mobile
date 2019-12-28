import React from 'react';

import FaNavigatorOuter from './app/components/navigation/NavigatorOuter';
import FaNavigatorInner from './app/components/navigation/NavigatorInner';
import { StatusBar } from 'react-native';

const Fa: () => React$Node = () => {
  const [authorised, setAuthorised] = React.useState(true);

  const content = authorised ? <FaNavigatorInner /> : <FaNavigatorOuter />

  return (
    <>
      <StatusBar barStyle='light-content'></StatusBar>
      {content}
    </>
  );
};

export default Fa;