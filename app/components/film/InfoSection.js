import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../context/theme';

const InfoSection = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <View style={s.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[s.title, {color: theme.colors.accent}]}>
          {props.title}
        </Text>
      </View>
      <Text style={[s.text, {color: theme.colors.text}]}>{props.text}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  text: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 17,
  },
  synopsis: {
    fontFamily: 'SourceSansPro-Regular',
  },
});

export default InfoSection;
