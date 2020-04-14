import React from 'react';

export const UserContext = React.createContext({
  user: {},
  setNewUser: () => {},
});

export const useUser = () => {
  return React.useContext(UserContext);
};
