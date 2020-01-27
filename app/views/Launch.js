import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import ws from '../ws';

const Launch = props => {

    ws.open()
        .then(() => {
            props.navigation.navigate('Feed');
        })
        .catch(() => {
            props.navigation.navigate('Login');
        })

    return (
        <LinearGradient colors={['#9FBFFD', '#7BA4F4', '#6996EF', '#4C76C8']} style={s.container}>
            <Image source={require('../../assets/images/logo.png')} style={s.logo}/>
            <Text style={s.title}>filmadder</Text>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 200,
        width: 200,
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        color: 'white',
        fontSize: 50,
    },
})

export default Launch;