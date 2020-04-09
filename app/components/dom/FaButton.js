import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {colours} from '../../colours';
import {ThemeContext} from '../../theme';

const FaButton = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        style={[
          styles.button,
          {backgroundColor: theme.colors.buttonPrimaryBg},
        ]}>
        <Text
          style={[styles.buttonTitle, {color: theme.colors.buttonPrimaryText}]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 36,
    elevation: 0.5,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowColor: colours.black,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    margin: 10,
    width: 160,
    minWidth: 160,
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Pacifico-Regular',
  },
});

export default FaButton;
