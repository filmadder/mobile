import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import AuthHeader from '../../components/auth/AuthHeader';
import Error from '../../components/Error';

const Login = props => {
    const lowercase = text => (text.toLowerCase());
    const [hasError, setHasError] = React.useState(false);

    const password = React.createRef();

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
                    onChangeText={text => lowercase(text)}
                    textContentType='emailAddress'
                    onSubmitEditing={() => password.current.focus()} />
                <Input
                    ref={password}
                    label='password'
                    textContentType='password' />
                <FaButton title='login' onPress={() => {}} />
            </AuthForm>
            <View>
                <Text>Don't have an account?</Text>
                <Text>Forgot your password?</Text>
            </View>
        </AuthContainer>
    )
};

const styles = StyleSheet.create({
    login: {
    },
})

export default Login;