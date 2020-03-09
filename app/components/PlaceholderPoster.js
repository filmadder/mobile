import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {colours} from '../colours';

const PlaceholderPoster = () => {
  return (
    <View style={s.container}>
      <Image source={require('../../assets/images/logo.png')} style={s.logo} />
      <Text style={s.text}>no poster</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: colours.blue4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,
    width: 125,
    maxWidth: 125,
    borderRadius: 5,
    marginRight: 15,
  },
  logo: {
    height: 50,
    width: 50,
  },
  text: {
    color: 'white',
  },
});

export default PlaceholderPoster;
