import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Login from './app/views/auth/Login';
import Register from './app/views/auth/Register';
import Profile from './app/views/Profile';
import Feed from './app/views/Feed';
import Search from './app/views/Search';
import Notifications from './app/views/Notifications';
import Settings from './app/views/Settings';
import Film from './app/views/Film';

const Fa: () => React$Node = () => {
  return (
    <>
      {/* <Register /> */}
      {/* <Login /> */}
      <Profile />
    </>
  );
};

const styles = StyleSheet.create({

});

export default Fa;
