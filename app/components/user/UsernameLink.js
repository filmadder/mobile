import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {colours} from '../../colours';
import {useNavigation} from '@react-navigation/native';

import Username from './Username';

const UsernameLink = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => navigation.push('Profile', {user: props.user.pk})}>
      <Username size={props.size} name={props.user.name} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  username: {
    textAlign: 'center',
    color: colours.black,
    padding: 3,
  },
});

export default UsernameLink;
