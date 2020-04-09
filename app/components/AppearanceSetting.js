import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Checkbox from '../components/dom/Checkbox';
import {ThemeContext} from '../theme';

const AppearanceSetting = () => {
  const [checked, setChecked] = React.useState(false);
  let theme = React.useContext(ThemeContext);

  AsyncStorage.getItem('theme').then(theme => {
    if (theme === 'dark') {
      setChecked(true);
    }
  });

  return (
    <View style={s.container}>
      <Text style={[s.text, {color: theme.colors.text}]}>use Dark Mode</Text>
      <ThemeContext.Consumer>
        {({toggleTheme}) => (
          <Checkbox
            onCheckboxChange={val => {
              AsyncStorage.setItem('theme', val ? 'dark' : 'light');
              toggleTheme();
            }}
            checked={checked}
          />
        )}
      </ThemeContext.Consumer>
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
