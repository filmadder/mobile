import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AuthContainer = props => {
    return (
        <LinearGradient colors={['#9FBFFD', '#7BA4F4', '#6996EF', '#4C76C8']} style={[styles.container, props.style]}>
            <KeyboardAvoidingView behavior='padding'>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {props.children}
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    scrollView: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 100,
    }
})

export default AuthContainer;