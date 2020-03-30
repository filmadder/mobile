import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

import Username from './Username';

const UsernameLink = props => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.navigation.push('Profile', {user: props.user.pk})}>
      <Username size={props.size} name={props.user.name} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  username: {
    textAlign: 'center',
    padding: 3,
  },
});

export default withNavigation(UsernameLink);
