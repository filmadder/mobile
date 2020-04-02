import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Avatar from './Avatar';

const AvatarLink = props => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (props.fromHeader) {
      navigation.navigate('Profile', {user: props.user.pk});
    } else {
      navigation.push('Profile', {user: props.user.pk});
    }
  };

  return (
    <TouchableOpacity style={props.style} onPress={handlePress}>
      <Avatar
        style={{marginRight: 0}}
        size={props.size}
        name={props.user.name}
        avatar={props.user.avatar_url}
      />
    </TouchableOpacity>
  );
};

export default AvatarLink;
