import React from 'react';
import {View} from 'react-native';
import Error from './Error';
import {EventRegister} from 'react-native-event-listeners';
import RNRestart from 'react-native-restart';
import {ThemeContext} from '../theme';

const ViewWrapper = props => {
  const theme = React.useContext(ThemeContext);

  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let listener = EventRegister.addEventListener('error', error => {
      if (error.code === 'NO_AUTH_TOKEN' || error.code === 'SOCKET_ERROR') {
        RNRestart.Restart();
      } else {
        setHasError(true);
        setError('Please check your internet connection.');
      }
    });

    return () => EventRegister.removeEventListener(listener);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      {hasError ? (
        <Error error={error} />
      ) : (
        <View style={props.style}>{props.children}</View>
      )}
    </View>
  );
};

export default ViewWrapper;
