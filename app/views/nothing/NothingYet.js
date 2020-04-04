import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FaButton from '../../components/dom/FaButton';

const NothingYet = (props) => {
  const {colors} = useTheme();
  return (
    <View style={[s.container, {backgroundColor: colors.background}]}>
      <Text style={[s.title, {color: colors.accent}]}>{props.title}</Text>
      <Text style={[s.text, {color: colors.text}]}>{props.text}</Text>
      <FaButton
        style={s.button}
        title={props.buttonTitle}
        onPress={props.onPress}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 24,
    paddingBottom: 30,
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
  },
});

export default NothingYet;
