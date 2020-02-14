import React from 'react';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthError from '../../components/AuthError';
import RedirectLink from '../../components/auth/RedirectLink';

import { loginUser } from '../../auth';

const Login = props => {
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const passwordRef = React.createRef();
    const viewRef = React.createRef();
    
    const login = () => {
        if (email.length === 0) {
            setError('error')
        } else if (password.length === 0) {
            setError('error')
        } else {
            loginUser(email, password)
                .then(() => {
                    props.navigation.navigate('Inner');
                })
                .catch(err => {
                    viewRef.current.scrollTo({x: 0, y: 0, animated: true})
                    setHasError(true)
                    setError(err.toString())
                })
        }
    };

    const dismissError = () => {
        setHasError(false)
        setError('')
    }

    const errorMessage = <AuthError
            errorText={error}
            dismiss={dismissError} />
    
    return (
        <AuthContainer
            ref={viewRef}>
            {hasError && errorMessage}
            <AuthHeader />
            <AuthForm>
                <Input
                    label='email'
                    value={email}
                    textContentType='emailAddress'
                    setFocused={() => setHasError(false)}
                    onChangeText={text => setEmail(text.toLowerCase())}
                    onSubmitEditing={() => passwordRef.current.focus()} />
                <Input
                    label='password'
                    value={password}
                    ref={passwordRef}
                    setFocused={() => setHasError(false)}
                    textContentType='password'
                    onChangeText={text => setPassword(text)} />
                <FaButton title='login' onPress={login} />
            </AuthForm>
            <RedirectLink
                text={'Don\'t have an account?'}
                onPress={() => props.navigation.navigate('Register')}
            />
        </AuthContainer>
    )
};

export default Login;