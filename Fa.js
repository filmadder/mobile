import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

// import FaButton from './app/components/FaButton';
// import Error from './app/components/Error';
import Login from './app/views/auth/Login';
import Register from './app/views/auth/Register';

const Fa: () => React$Node = () => {
  return (
    <>
        <Register />
    </>
  );
};

const styles = StyleSheet.create({

});

export default Fa;
