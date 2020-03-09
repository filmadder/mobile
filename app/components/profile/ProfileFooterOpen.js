import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colours} from '../../colours';

const ProfileFooterOpen = props => {
  return (
    <View style={s.container}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[s.text, s.bold]}>{props.total} </Text>
          <Text style={s.text}>films in</Text>
        </View>
        <Text style={[s.text, s.bold]}>{props.current}</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={s.text}>sort by </Text>
          <Text style={[s.text, s.bold]}>year</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={s.text}>filter </Text>
          <Text style={[s.text, s.bold]}>none</Text>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
    height: 300,
    elevation: 0.5,
    shadowOffset: {
      height: -4,
      width: 0,
    },
    shadowColor: colours.black,
    shadowRadius: 3,
    shadowOpacity: 0.2,
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    color: colours.black,
    fontSize: 15,
  },
  bold: {
    fontFamily: 'SourceSansPro-Bold',
  },
});

export default ProfileFooterOpen;
