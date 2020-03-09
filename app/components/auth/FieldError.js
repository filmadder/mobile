import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FieldError = props => {
  return (
    <View style={s.container}>
      <Text>{props.text}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {},
});

export default FieldError;
