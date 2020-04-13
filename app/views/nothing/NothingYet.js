import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FaButton from '../../components/dom/FaButton';
import {ThemeContext} from '../../context/theme';

const NothingYet = props => {
  const theme = React.useContext(ThemeContext);
  return (
    <View style={[s.container, {backgroundColor: theme.colors.background}]}>
      <Text style={[s.title, {color: theme.colors.accent}]}>{props.title}</Text>
      <Text style={[s.text, {color: theme.colors.text}]}>{props.text}</Text>
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
