import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {getDate} from '../utils';
import {ThemeContext} from '../theme';

const Date = props => {
  const theme = React.useContext(ThemeContext);
  const [date, setDate] = React.useState();

  React.useEffect(() => {
    setDate(getDate(props.created));
  });

  return (
    <Text
      style={[
        s.date,
        props.styles,
        {
          color: theme.colors.accent,
        },
      ]}>
      {date}
    </Text>
  );
};

const s = StyleSheet.create({
  date: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 13,
    textAlign: 'right',
  },
});

export default Date;
