import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>filmadder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    color: 'white',
    fontSize: 36,
  },
  logo: {
    height: 150,
    width: 150,
  },
});

export default AuthHeader;
