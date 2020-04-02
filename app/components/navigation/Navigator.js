import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from './NavigatorInner';

import Login from '../../views/auth/Login';
import Launch from '../../views/Launch';
import Register from '../../views/auth/Register';

// const FaNavigator = createSwitchNavigator(
//   {
//     Launch: {
//       screen: Launch,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     Login: {
//       screen: Login,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     Register: {
//       screen: Register,
//       navigationOptions: {
//         header: null,
//       },
//     },
//     Inner: {
//       screen: Navigation,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   },
//   {
//     initialRouteName: 'Launch',
//   },
// );

export default Navigator = () => {
  return <NavigationContainer>{Navigation()}</NavigationContainer>;
};
