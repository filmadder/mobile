import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Input from '../../components/Input';
import FaButton from '../../components/FaButton';
import AuthContainer from '../../components/AuthContainer';
import AuthForm from '../../components/AuthForm';

const Register = props => {
    const lowercase = text => {
        return text.toLowerCase()
    };

    return (
        <AuthContainer style={styles.register}>
            <View style={{ height: 250, width: 250 }}></View>
            <AuthForm>
                <Input label='username' textContentType='none' />
                <Input label='email'
                    onChangeText={text => lowercase(text)}
                    textContentType='emailAddress' />
                <Input label='password' textContentType='password' />
                <Input label='repeat password' textContentType='password' />
                <FaButton title='register' onPress={() => {}} />
            </AuthForm>
            <View>
                <Text>Already have an account?</Text>
            </View>
        </AuthContainer>
    )
};

const styles = StyleSheet.create({

})

export default Register;