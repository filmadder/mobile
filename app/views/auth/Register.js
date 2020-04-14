import React from 'react';
import {View, StyleSheet} from 'react-native';
import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import AuthError from '../../components/AuthError';
import AuthHeader from '../../components/auth/AuthHeader';
import RedirectLink from '../../components/auth/RedirectLink';
import Loader from '../../components/Loader';
import {UserContext} from '../../context/user';

import {registerUser} from '../../auth';

const Register = props => {
  const {setNewUser} = React.useContext(UserContext);
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const emailRef = React.createRef();
  const password1Ref = React.createRef();
  const password2Ref = React.createRef();
  const viewRef = React.createRef();

  React.useEffect(() => {
    if (hasError) {
      viewRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  }, [hasError]);

  const dismissError = () => {
    setHasError(false);
    setError('');
  };

  const errorMessage = <AuthError errorText={error} dismiss={dismissError} />;

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      registerUser(email, name, password1, password2)
        .then(user => {
          setNewUser(user);
        })
        .then(() => {
          props.navigation.navigate('Inner');
        })
        .catch(err => {
          setLoading(false);
          setHasError(true);
          setError(err.toString());
        });
    }, 200);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {loading ? (
        <Loader />
      ) : (
        <AuthContainer ref={viewRef} style={styles.register}>
          {hasError && errorMessage}
          <AuthHeader />
          <AuthForm>
            <Input
              label="username"
              value={name}
              textContentType="none"
              setFocused={() => setHasError(false)}
              onChangeText={text => setName(text)}
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <Input
              ref={emailRef}
              label="email"
              value={email}
              textContentType="emailAddress"
              setFocused={() => setHasError(false)}
              onChangeText={text => setEmail(text.toLowerCase())}
              onSubmitEditing={() => password1Ref.current.focus()}
            />
            <Input
              ref={password1Ref}
              label="password"
              value={password1}
              textContentType="password"
              setFocused={() => setHasError(false)}
              onChangeText={text => setPassword1(text)}
              onSubmitEditing={() => password2Ref.current.focus()}
            />
            <Input
              ref={password2Ref}
              label="repeat password"
              value={password2}
              textContentType="password"
              setFocused={() => setHasError(false)}
              onChangeText={text => setPassword2(text)}
              onSubmitEditing={register}
            />
            <FaButton title="register" onPress={register} />
          </AuthForm>
          <RedirectLink
            onPress={() => props.navigation.navigate('Login')}
            text="Already have an account?"
          />
        </AuthContainer>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
