import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Avatar from '../user/Avatar';
import AsyncStorage from '@react-native-community/async-storage';
import {colours} from '../../colours';

const MyProfileBtn = props => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    AsyncStorage.getItem('user')
      .then(user => {
        let parsedUser = JSON.parse(user);
        setUser(parsedUser);
      })
      .catch(err => console.warn(err));
  }, []);

  const handlePress = () => {
    props.navigation.navigate('Profile', {user: user.pk});
    props.navigation.closeDrawer();
  };

  if (user) {
    return (
      <TouchableOpacity onPress={handlePress} style={s.button}>
        <Avatar
          size="large"
          name={user.name}
          avatar={user.avatar_url}
          style={s.avatar}
        />
        <Text style={s.username}>{user.name}</Text>
      </TouchableOpacity>
    );
  }

  return null;
};

const s = StyleSheet.create({
  button: {
    marginBottom: 30,
  },
  avatar: {
    margin: 20,
  },
  username: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'SourceSansPro-Bold',
    color: colours.grey,
  },
});

export default MyProfileBtn;
