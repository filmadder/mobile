import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../theme';

const ViewTitle = props => {
  const theme = React.useContext(ThemeContext);

  return (
    <View style={[s.container, props.style]}>
      <Text style={[s.title, {color: theme.colors.accent}]}>{props.title}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    margin: 15,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 10,
  },
});

export default ViewTitle;
