import React from 'react';
import {useColorScheme} from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import {ThemeContext, themes} from '../theme';

const Theme = props => {
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
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;
