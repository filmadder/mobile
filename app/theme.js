import React from 'react';

const palette = {
  white: 'white',
  blue0: '#F3F5FB',
  blue1: '#CEDDF9',
  blue2: '#9FBFFD',
  blue3: '#7BA4F4',
  blue4: '#6996EF',
  blue5: '#4C76C8',
  pink: '#FF005C',
  darkGrey: '#414141',
  grey: '#343434',
  black: '#010101',
};

export const themes = {
  dark: {
    primary: 'white',
    card: 'black',
    border: 'white',
    accent: palette.blue3,
    background: palette.black,
    buttonPrimaryText: palette.black,
    buttonPrimaryBg: palette.blue3,
    buttonSecondaryText: palette.blue3,
    feedCard: palette.darkGrey,
    text: palette.white,
  },
  light: {
    primary: 'black',
    card: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    accent: palette.blue4,
    background: palette.white,
    buttonPrimaryText: palette.white,
    buttonPrimaryBg: palette.blue3,
    buttonSecondaryText: palette.blue4,
    feedCard: palette.blue0,
    text: palette.darkGrey,
  },
};

export const ThemeContext = React.createContext({
  colors: themes.light,
  toggleTheme: () => {},
});
