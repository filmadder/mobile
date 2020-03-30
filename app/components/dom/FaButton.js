import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {useTheme} from '../../theme/hooks';

import {colours} from '../../colours';

const FaButton = props => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={{alignItems: 'center'}}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <View style={[styles.button, {backgroundColor: colors.buttonPrimaryBg}]}>
        <Text style={[styles.buttonTitle, {color: colors.buttonPrimaryText}]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
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
  },
  buttonTitle: {
    fontSize: 22,
    fontFamily:
      Platform.OS === 'android' ? 'Pacifico-Regular' : 'Pacifico-Regular',
  },
});

export default FaButton;
