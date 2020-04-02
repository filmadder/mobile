import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Avatar from './Avatar';
import Username from './Username';

const UserRow = props => {
  const navigation = useNavigation();
  const goToProfile = () => {
    if (!props.cancelPress) {
      navigation.push('Profile', {user: props.user.pk});
    }
  };

  return (
    <TouchableOpacity style={[s.container, props.style]} onPress={goToProfile}>
      <Avatar
        name={props.user.name}
        avatar={props.user.avatar_url}
        size={props.size}
      />
      <Username name={props.user.name} size={props.size} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default UserRow;
