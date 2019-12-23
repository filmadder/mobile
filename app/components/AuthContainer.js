import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AuthContainer = props => {
    return (
        <LinearGradient colors={['#9FBFFD', '#7BA4F4', '#6996EF', '#5A8DF1']} style={props.style, styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {props.children}
            </ScrollView>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        paddingVertical: 100,
    }
})

export default AuthContainer;