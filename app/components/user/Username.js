import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../theme';

const Username = props => {
  const theme = React.useContext(ThemeContext);

  let styles = null;

  switch (props.size) {
    case 'large':
      {
        styles = {
          fontFamily: 'Pacifico-Regular',
          fontSize: 22,
        };
      }
      break;
    case 'small':
      {
        styles = {
          fontFamily: 'SourceSansPro-Bold',
          fontSize: 16,
        };
      }
      break;
    default:
      styles = {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 16,
      };
  }

  return (
    <Text
      style={[
        s.username,
        styles,
        {
          color: theme.colors.text,
        },
        props.style,
      ]}>
      {props.name}
    </Text>
  );
};

const s = StyleSheet.create({
  username: {
    textAlign: 'center',
    padding: 3,
  },
});

export default Username;
