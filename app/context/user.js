import React from 'react';

export const UserContext = React.createContext({});

export const useUser = () => {
  return React.useContext(UserContext);
};
