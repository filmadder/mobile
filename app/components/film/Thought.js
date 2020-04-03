import React from 'react';
import {View, Alert, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AvatarLink from '../../components/user/AvatarLink';
import UsernameLink from '../../components/user/UsernameLink';
import FaSmallButton from '../../components/dom/FaSmallButton';
import Date from '../Date';
import {useTheme} from '../../theme/hooks';

const Thought = props => {
  const {colors} = useTheme();
  const [sameUser, setSameUser] = React.useState(false);

  React.useEffect(() => {
    AsyncStorage.getItem('user')
      .then(user => {
        let thisUser = JSON.parse(user);
        if (thisUser.pk === props.user.pk.toString()) {
          setSameUser(true);
        }
      })
      .catch(err => {
        console.warn(err);
      });
  }, []);

  const deleteComment = text => {
    Alert.alert(
      'Are you sure you want to delete this thought?',
      text,
      [
        {text: 'No', style: 'cancel'},
        {text: 'Yes', onPress: () => props.deleteComment()},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={[s.container, {borderColor: colors.accent}]}>
      <AvatarLink style={s.avatar} size="medium" user={props.user} />
      <View style={[s.header, {borderBottomColor: colors.accent}]}>
        <UsernameLink size="small" user={props.user} />
        <Date style={s.date} created={props.created} />
      </View>
      <View style={s.textContainer}>
        <Text style={[s.text, {color: colors.text}]}>{props.text}</Text>
      </View>
      {sameUser && (
        <FaSmallButton
          style={s.button}
          title="delete"
          onPress={() => deleteComment(props.text)}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  avatar: {
    position: 'absolute',
    top: -10,
    left: -10,
    margin: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  date: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
  },
  textContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 15,
    lineHeight: 18,
  },
  button: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -10,
    right: 10,
  },
});

export default Thought;
