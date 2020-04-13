import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Checkbox from './dom/Checkbox';
import {ThemeContext} from '../context/theme';

const CheckboxField = props => {
  const theme = React.useContext(ThemeContext);

  const onCheckboxChange = currentState => {
    props.onCheckboxChange(currentState);
  };

  return (
    <View style={[s.container, props.style]}>
      <View style={s.textContainer}>
        <Text style={[s.text, {color: theme.colors.text}]}>{props.text}</Text>
      </View>
      <Checkbox checked={props.checked} onCheckboxChange={onCheckboxChange} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  textContainer: {
    marginRight: 20,
    marginTop: 5,
  },
  text: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 15,
  },
});

export default CheckboxField;
