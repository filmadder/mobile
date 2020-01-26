import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import AuthHeader from '../../components/auth/AuthHeader';
import Error from '../../components/Error';

import { login } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = props => {
    const lowercase = text => (text.toLowerCase());
    const [hasError, setHasError] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch();

    const passwordRef = React.createRef();

    const token = useSelector(state => state.token);

    if (token) {
        props.navigation.navigate('Inner')
    }

    const errorMessage = <Error
            errorText='something went wrong on the backend'
            onDismiss={() => setHasError(false)} />
    
    return (
        <AuthContainer style={styles.login}>
            {hasError && errorMessage}
            <AuthHeader />
            <AuthForm>
                <Input
                    label='email'
                    value={email}
                    onChangeText={text => lowercase(text)}
                    textContentType='emailAddress'
                    onChangeText={text => setEmail(text.toLowerCase())}
                    onSubmitEditing={() => passwordRef.current.focus()} />
                <Input
                    label='password'
                    value={password}
                    ref={passwordRef}
                    textContentType='password'
                    onChangeText={text => setPassword(text)} />
                <FaButton title='login' onPress={() => dispatch(login(email, password))} />
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