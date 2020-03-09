import React from 'react';
import {View} from 'react-native';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthError from '../../components/AuthError';
import RedirectLink from '../../components/auth/RedirectLink';
import Loader from '../../components/Loader';

import {loginUser} from '../../auth';

const Login = props => {
  const [hasError, setHasError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordRef = React.createRef();
  const viewRef = React.createRef();

  React.useEffect(() => {
    if (hasError) {
      viewRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  }, [hasError]);

  const login = () => {
    if (email.length === 0) {
      setError('Please enter an email address.');
    } else if (password.length === 0) {
      setError('Please enter a password.');
    } else {
      setLoading(true);
      setTimeout(() => {
        loginUser(email, password)
          .then(() => {
            props.navigation.navigate('Inner');
          })
          .catch(err => {
            setLoading(false);
            setHasError(true);
            setError(err.toString());
          });
      }, 200);
    }
  };

  const dismissError = () => {
    setHasError(false);
    setError('');
  };

  const errorMessage = <AuthError errorText={error} dismiss={dismissError} />;

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {loading ? (
        <Loader />
      ) : (
        <AuthContainer ref={viewRef}>
          {hasError && errorMessage}
          <AuthHeader />
          <AuthForm>
            <Input
              label="email"
              value={email}
              textContentType="emailAddress"
              setFocused={() => setHasError(false)}
              onChangeText={text => setEmail(text.toLowerCase())}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <Input
              label="password"
              value={password}
              ref={passwordRef}
              setFocused={() => setHasError(false)}
              textContentType="password"
              onChangeText={text => setPassword(text)}
              onSubmitEditing={login}
            />
            <FaButton title="login" onPress={login} />
          </AuthForm>
          <RedirectLink
            text={"Don't have an account?"}
            onPress={() => props.navigation.navigate('Register')}
          />
        </AuthContainer>
      )}
    </View>
  );
};

export default Login;
