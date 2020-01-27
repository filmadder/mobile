import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Input from '../../components/dom/Input';
import FaButton from '../../components/dom/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import Error from '../../components/Error';
import AuthHeader from '../../components/auth/AuthHeader';

import { registerUser } from '../../auth';

const Register = props => {
    const [hasError, setHasError] = React.useState(false);
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password1, setPassword1] = React.useState('')
    const [password2, setPassword2] = React.useState('')
    
    const emailRef = React.createRef();
    const password1Ref = React.createRef();
    const password2Ref = React.createRef();

    const errorMessage = <Error
            errorText='passwords dont match'
            onDismiss={() => setHasError(false)}/>
    
    const register = () => {
        registerUser(email, name, password1, password2)
            .then(token => {
                if (token) {
                    props.navigation.navigate('Inner');
                }
            })
            .catch(err => console.warn(err))
    };

    return (
        <AuthContainer style={styles.register}>
            {hasError && errorMessage}
            <AuthHeader />
            <AuthForm>
                <Input
                    label='username'
                    value={name}
                    textContentType='none'
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => emailRef.current.focus()} />
                <Input
                    ref={emailRef}
                    label='email'
                    value={email}
                    textContentType='emailAddress'
                    onChangeText={text => setEmail(text.toLowerCase())}
                    onSubmitEditing={() => password1Ref.current.focus()} />
                <Input
                    ref={password1Ref}
                    label='password'
                    value={password1}
                    textContentType='password'
                    onChangeText={text => setPassword1(text)}
                    onSubmitEditing={() => password2Ref.current.focus()} />
                <Input
                    ref={password2Ref}
                    label='repeat password'
                    value={password2}
                    textContentType='password'
                    onChangeText={text => setPassword2(text)}
                    onSubmitEditing={() => (console.log('on submit editing'))} />
                <FaButton title='register' onPress={register} />
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