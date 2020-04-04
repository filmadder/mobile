import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const FaSmallButton = (props) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        {alignItems: 'center'},
        props.style,
        {
          backgroundColor: colors.background,
        },
      ]}
      activeOpacity={0.8}
      onPress={props.onPress}>
      <View
        style={[
          s.button,
          {
            borderColor: colors.accent,
            backgroundColor: colors.background,
          },
        ]}>
        <Text
          style={[
            s.buttonTitle,
            {
              color: colors.buttonSecondaryText,
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
