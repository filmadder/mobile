import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Error from './Error';
import LinearGradient from 'react-native-linear-gradient';

import ws from '../ws';

const Launch = props => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    ws.open()
      .then(() => {
        props.navigation.navigate('Inner');
      })
      .catch(err => {
        if (err.code === 'NO_AUTH_TOKEN' || err.code === 'SOCKET_ERROR') {
          props.navigation.navigate('Login');
        } else {
          setHasError(true);
          setError('Please check your internet connection.');
        }
      });
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {hasError ? (
        <Error error={error} />
      ) : (
        <LinearGradient
          colors={['#9FBFFD', '#7BA4F4', '#6996EF', '#4C76C8']}
          style={s.container}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={s.logo}
          />
          <Text style={s.title}>filmadder</Text>
        </LinearGradient>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 170,
    width: 170,
  },
  title: {
    fontFamily: 'Pacifico-Regular',
    color: 'white',
    fontSize: 45,
  },
});

export default Launch;
