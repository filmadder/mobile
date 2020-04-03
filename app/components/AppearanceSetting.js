import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, StyleSheet} from 'react-native';
import Checkbox from '../components/dom/Checkbox';
import {useTheme} from '../theme/hooks';

const AppearanceSetting = props => {
  const [checked, setChecked] = React.useState(false);
  let theme = useTheme();

  AsyncStorage.getItem('theme').then(theme => {
    if (theme === 'dark') {
      setChecked(true);
    }
  });

  return (
    <View style={s.container}>
      <Text style={[s.text, {color: theme.colors.text}]}>use Dark Mode</Text>
      <Checkbox
        onCheckboxChange={val => {
          AsyncStorage.setItem('theme', val ? 'dark' : 'light');
          props.reloadView();
        }}
        checked={checked}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 17,
  },
});

export default AppearanceSetting;
