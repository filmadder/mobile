import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Text,
} from 'react-native';

import Login from './app/views/auth/Login';
import Register from './app/views/auth/Register';
import User from './app/views/User';
import Feed from './app/views/Feed';
import Search from './app/views/Search';

const Fa: () => React$Node = () => {
  return (
    <>
      <View style={styles.view}>
        <Feed />
      </View>
      {/* <Login /> */}
      {/* <Search /> */}
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});

export default Fa;
