import React from 'react';
import {useColorScheme} from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import {ThemeContext, themes} from '../theme';

const Theme = props => {
  const fallbackTheme = useColorScheme();
  const [theme, setTheme] = React.useState(() => {
    if (fallbackTheme === 'dark' || fallbackTheme === 'light') {
      return themes[fallbackTheme];
    }

    return themes.light;
  });

  React.useEffect(() => {
    AsyncStorage.getItem('theme')
      .then(theme => {
        if (theme) {
          setTheme(themes[theme]);
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  });

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;
