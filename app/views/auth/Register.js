import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Input from '../../components/Input';
import FaButton from '../../components/FaButton';
import AuthContainer from '../../components/auth/AuthContainer';
import AuthForm from '../../components/auth/AuthForm';
import Error from '../../components/Error';
import AuthHeader from '../../components/auth/AuthHeader';

const Register = props => {
    const lowercase = text => (text.toLowerCase());
    const [hasError, setHasError] = React.useState(false)

    const errorMessage = hasError ? <Error
            errorText='passwords dont match'
            onDismiss={() => setHasError(false)}/> : <></>

    return (
        <AuthContainer style={styles.register}>
            {errorMessage}
            <AuthHeader />
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