import React from 'react';

import FaNavigatorOuter from './app/components/navigation/NavigatorOuter';
import FaNavigatorInner from './app/components/navigation/NavigatorInner';

const Fa: () => React$Node = () => {
  const [authorised, setAuthorised] = React.useState(true);

  const content = authorised ? <FaNavigatorInner /> : <FaNavigatorOuter />

  return (
    <>
      {content}
    </>
  );
};

export default Fa;
