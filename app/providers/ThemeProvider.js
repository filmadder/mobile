import React from 'react';
import {StatusBar} from 'react-native';
import {useColorScheme} from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import {ThemeContext, themes} from '../context/theme';

const ThemeProvider = props => {
  const fallbackTheme = useColorScheme();
  const [colors, setColors] = React.useState(() => {
    if (fallbackTheme === 'dark' || fallbackTheme === 'light') {
      return themes[fallbackTheme];
    }

    return themes.light;
  });

  React.useEffect(() => {
    AsyncStorage.getItem('theme')
      .then(theme => {
        if (theme) {
          setColors(themes[theme]);
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  });

  const toggleTheme = () => {
    if (colors === themes.light) {
      setColors(themes.dark);
    } else {
      setColors(themes.light);
    }
  };

  return (
    <ThemeContext.Provider value={{colors, toggleTheme}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.accent} />
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
