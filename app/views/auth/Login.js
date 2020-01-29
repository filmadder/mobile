import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import AuthHeader from '../../components/auth/AuthHeader';
import Error from '../../components/Error';

import { loginUser } from '../../auth';

const Login = props => {
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const passwordRef = React.createRef();
    
    const login = () => {
        loginUser(email, password)
            .then(token => {
                props.navigation.navigate('Inner');
            })
            .catch(err => {
                console.log('in')
                setHasError(true)
                setError(err)
            })
    };

    const errorMessage = <Error
            errorText={error}
            onDismiss={() => setHasError(false)} />
    
    return (
        <AuthContainer style={styles.login}>
            {hasError && errorMessage}
            <AuthHeader />
            <AuthForm>
                <Input
                    label='email'
                    value={email}
                    textContentType='emailAddress'
                    onChangeText={text => setEmail(text.toLowerCase())}
                    onSubmitEditing={() => passwordRef.current.focus()} />
                <Input
                    label='password'
                    value={password}
                    ref={passwordRef}
                    textContentType='password'
                    onChangeText={text => setPassword(text)} />
                <FaButton title='login' onPress={login} />
            </AuthForm>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Register')}>
                    <Text>
                        Don't have an account?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
            </View>
        </AuthContainer>
    )
};

const styles = StyleSheet.create({
    login: {
    },
})

export default Login;