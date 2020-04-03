import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InnerNavigation from './InnerNavigation';
import Login from '../../views/auth/Login';
import Launch from '../../views/Launch';
import Register from '../../views/auth/Register';
import ws from '../../ws';

const Stack = createStackNavigator();

export default NN = () => {
  const [logged, setLogged] = React.useState('pending');
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    ws.open()
      .then(() => {
        setLogged('logged');
      })
      .catch(err => {
        if (err.code === 'NO_AUTH_TOKEN' || err.code === 'SOCKET_ERROR') {
          setLogged('notlogged');
        } else {
          setHasError(true);
          setError('Please check your internet connection.');
        }
      });
  }, []);

  const Navigation = initialRoute => {
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
    <NavigationContainer>
      {logged === 'logged' ? Navigation('Inner') : Navigation('Login')}
    </NavigationContainer>
  );
};
