import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../context/theme';

const FaSmallButton = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        {alignItems: 'center'},
        props.style,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      activeOpacity={0.8}
      onPress={props.onPress}>
      <View
        style={[
          s.button,
          {
            borderColor: theme.colors.accent,
            backgroundColor: theme.colors.background,
          },
        ]}>
        <Text
          style={[
            s.buttonTitle,
            {
              color: theme.colors.buttonSecondaryText,
            },
          ]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    borderWidth: 1,
  },
  buttonTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
  },
});

export default FaSmallButton;
