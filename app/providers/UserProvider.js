import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../context/user';

const UserProvider = props => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    AsyncStorage.getItem('user')
      .then(user => {
        setUser(JSON.parse(user));
      })
      .catch(err => {
        throw new Error(err);
      });
  }, []);

  const setNewUser = user => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{user, setNewUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
