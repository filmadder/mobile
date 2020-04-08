import React from 'react';
import {useColorScheme} from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import {themes} from '../theme';

export const useTheme = () => {
  const [theme, setTheme] = React.useState(themes.light);
  const fallbackTheme = useColorScheme();

  AsyncStorage.getItem('theme')
    .then(theme => {
      console.log(theme);
      if (theme === 'dark' || fallbackTheme === 'dark') {
        setTheme(themes.dark);
      }
    })
    .catch(err => {
      throw new Error(err);
    });

  return theme;
};
