import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconButton from '../../components/dom/IconButton';
import {ThemeContext} from '../../context/theme';

const SynopsisSection = props => {
  const theme = React.useContext(ThemeContext);

  const [showing, setShowing] = React.useState(true);
  const hideIcon = (
    <IconButton
      style={{marginHorizontal: 8}}
      name="eye-slash"
      onPress={() => setShowing(false)}
    />
  );
  const showIcon = (
    <IconButton
      style={{marginHorizontal: 8}}
      name="eye"
      onPress={() => setShowing(true)}
    />
  );

  return (
    <View style={s.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[s.title, {color: theme.colors.accent}]}>
          {props.title}
        </Text>
        {showing ? hideIcon : showIcon}
      </View>
      {showing && (
        <Text style={[s.text, {color: theme.colors.text}]}>{props.text}</Text>
      )}
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
  },
  text: {
    marginTop: 3,
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 17,
  },
  synopsis: {
    fontFamily: 'SourceSansPro-Regular',
  },
});

export default SynopsisSection;
