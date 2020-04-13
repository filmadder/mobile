import React from 'react';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import Username from './Username';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../context/theme';
import ws from '../../ws';

const UserCard = props => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);

  const goToProfile = () => {
    if (!props.longPress && !props.cancelPress) {
      navigation.push('Profile', {user: props.user.pk});
    }
  };

  const handleLongPress = () => {
    if (props.longPress) {
      Alert.alert(
        'Delete Friend',
        `remove ${props.user.name} from friends`,
        [
          {text: 'No', style: 'cancel'},
          {text: 'Yes', onPress: () => dropFriendship()},
        ],
        {cancelable: true},
      );
    }
  };

  const dropFriendship = () => {
    ws.send({
      id: null,
      type: 'drop_friendship',
      user: props.user.pk,
    }).then(response => {
      if (response.type === 'confirm') {
        props.reload();
      }
    });
  };

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        props.style,
      ]}
      onPress={goToProfile}
      onLongPress={handleLongPress}>
      <View style={styles.containerInner}>
        <Avatar
          style={styles.avatar}
          size={props.size}
          name={props.user.name}
          avatar={props.user.avatar_url}
        />
        <Username
          style={styles.username}
          name={props.user.name}
          size={props.size}
          navigation={props.navigation}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    marginRight: 0,
    alignItems: 'center',
  },
  containerInner: {
    paddingVertical: 30,
    marginHorizontal: 20,
  },
  username: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default UserCard;
