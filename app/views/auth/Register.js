import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import Error from '../../components/Error';
import AuthHeader from '../../components/auth/AuthHeader';

const Register = props => {
    const lowercase = text => (text.toLowerCase());
    const [hasError, setHasError] = React.useState(false);

    const email = React.createRef();
    const password1 = React.createRef();
    const password2 = React.createRef();

    const errorMessage = <Error
            errorText='passwords dont match'
            onDismiss={() => setHasError(false)}/>

    return (
        <AuthContainer style={styles.register}>
            {hasError && errorMessage}
            <AuthHeader />
            <AuthForm>
                <Input
                    label='username'
                    textContentType='none'
                    onSubmitEditing={() => email.current.focus()} />
                <Input
                    ref={email}
                    label='email'
                    onChangeText={text => lowercase(text)}
                    textContentType='emailAddress'
                    onSubmitEditing={() => password1.current.focus()} />
                <Input
                    ref={password1}
                    label='password'
                    textContentType='password'
                    onSubmitEditing={() => password2.current.focus()} />
                <Input
                    ref={password2}
                    label='repeat password'
                    textContentType='password'
                    onSubmitEditing={() => (console.log('on submit editing'))} />
                <FaButton title='register' onPress={() => {}} />
            </AuthForm>
            <View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}>
                    <Text>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </AuthContainer>
    )
};

const styles = StyleSheet.create({

})

export default Register;