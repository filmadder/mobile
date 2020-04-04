import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {getDate} from '../utils';
import {useTheme} from '@react-navigation/native';

const Date = (props) => {
  const {colors} = useTheme();
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
          color: colors.accent,
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
