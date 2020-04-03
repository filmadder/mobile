import React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {themedColors} from './index';
import AsyncStorage from '@react-native-community/async-storage';

export const useTheme = () => {
  const [theme, setTheme] = React.useState('light');
  const fallbackTheme = useColorScheme();
  const colors = themedColors[theme];

  AsyncStorage.getItem('theme')
    .then(theme => {
      if (theme) {
        setTheme(theme);
      } else if (fallbackTheme === 'dark' || fallbackTheme === 'light') {
        setTheme(fallbackTheme);
      }
    })
    .catch(err => {
      throw new Error(err);
    });

  return {
    colors,
    theme,
  };
};
