import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserRow from '../components/user/UserRow';
import Date from '../components/Date';
import {useTheme} from '@react-navigation/native';

const NotificationItem = (props) => {
  const {colors} = useTheme();
  const [actionText, setActionText] = React.useState();

  React.useEffect(() => {
    setAction();
  }, []);

  const setAction = () => {
    switch (props.type) {
      case 'q':
        setActionText('wants to be friends with you');
        break;
      case 'f':
        setActionText('and you are friends now');
        break;
      case 'd':
        setActionText('is not friends with you anymore');
        break;
      case 'c':
        setActionText('rejected your friend request');
        break;
    }
  };

  return (
    <View style={[s.container, props.style]}>
      <View style={[s.card, {borderBottomColor: colors.accent}]}>
        <View style={s.action}>
          <UserRow user={props.user} size="large" />
          <Text style={[s.text, {color: colors.text}]}>{actionText}</Text>
        </View>
        {props.children}
        <Date styles={{paddingVertical: 10}} created={props.created} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    paddingTop: 40,
    borderBottomWidth: 1,
  },
  action: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 17,
    margin: 10,
  },
});

export default NotificationItem;
