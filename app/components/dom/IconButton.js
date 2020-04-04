import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';

const IconButton = (props) => {
  const {colors} = useTheme();
  const icon = (
    <Icon
      name={props.name}
      size={props.size || 24}
      color={props.color || colors.accent}
    />
  );

  return (
    <TouchableOpacity
      style={[{alignItems: 'center', padding: 10}, props.style]}
      activeOpacity={0.6}
      onPress={props.onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
