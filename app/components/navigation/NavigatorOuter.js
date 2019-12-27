import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../../views/auth/Login';
import Register from '../../views/auth/Register';

const FaNavigatorOuter = createStackNavigator(
    {
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
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(FaNavigatorOuter);