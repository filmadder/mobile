import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UsernameLink from '../user/UsernameLink';
import {useTheme} from '@react-navigation/native';

const FeedCardHeader = (props) => {
  const {colors} = useTheme();
  return (
    <View style={s.action}>
      <UsernameLink user={props.user} navigation={props.navigation} />
      <Text style={[s.actionText, {color: colors.text}]}>{props.action}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  actionText: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    marginTop: 3,
  },
});

export default FeedCardHeader;
