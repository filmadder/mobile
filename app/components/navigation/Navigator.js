import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../../views/auth/Login';
import Launch from '../../views/Launch';
import Register from '../../views/auth/Register';
import FaNavigatorInner from './NavigatorInner';

const FaNavigator = createSwitchNavigator(
  {
    Launch: {
      screen: Launch,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    Inner: {
      screen: FaNavigatorInner,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Launch',
  },
);

export default createAppContainer(FaNavigator);
