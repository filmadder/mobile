import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from '../../context/theme';

const IconButton = props => {
  const theme = React.useContext(ThemeContext);
  const icon = (
    <Icon
      name={props.name}
      size={props.size || 24}
      color={props.color || theme.colors.accent}
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
