import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Input from '../../components/Input';
import FaButton from '../../components/FaButton';
import AuthContainer from '../../components/AuthContainer';
import AuthForm from '../../components/AuthForm';

const Login = props => {
    const lowercase = text => (text.toLowerCase());
    
    return (
        <AuthContainer style={styles.login}>
            <View style={{ height: 150, width: 150 }}></View>
            <AuthForm>
                <Input
                    label='email'
                    onChangeText={text => lowercase(text)}
                    textContentType='emailAddress' />
                <Input label='password' textContentType='password' />
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
    }
})

export default Login;