import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native-appearance';
import AsyncStorage from '@react-native-community/async-storage';
import InnerNavigation from './InnerNavigation';
import Login from '../../views/auth/Login';
import Launch from '../../views/Launch';
import Register from '../../views/auth/Register';
import {themedColors} from '../../theme/index';
import ws from '../../ws';

const Stack = createStackNavigator();

export default NN = () => {
  const [logged, setLogged] = React.useState('pending');
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState('');
  const [theme, setTheme] = React.useState('light');
  const fallbackTheme = useColorScheme();

  React.useEffect(() => {
    ws.open()
      .then(() => {
        setLogged('logged');
      })
      .catch((err) => {
        if (err.code === 'NO_AUTH_TOKEN' || err.code === 'SOCKET_ERROR') {
          setLogged('notlogged');
        } else {
          setHasError(true);
          setError('Please check your internet connection.');
        }
      });

    AsyncStorage.getItem('theme')
      .then((theme) => {
        if (theme) {
          setTheme(theme);
        } else if (fallbackTheme === 'dark' || fallbackTheme === 'light') {
          setTheme(fallbackTheme);
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const Navigation = (initialRoute) => {
    return (
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inner"
          component={InnerNavigation}
          options={{
            title: null,
            headerShown: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  if (logged === 'pending') {
    return <Launch error={error} hasError={hasError} />;
  }

  return (
    <NavigationContainer theme={themedColors[theme]}>
      {logged === 'logged' ? Navigation('Inner') : Navigation('Login')}
    </NavigationContainer>
  );
};
