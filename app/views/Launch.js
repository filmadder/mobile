import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ws from '../ws';

import AsyncStorage from '@react-native-community/async-storage';

const Launch = props => {

    ws.open()
        .then(() => {
            props.navigation.navigate('Feed');
        })
        .catch(() => {
            props.navigation.navigate('Login');
        })

    return (
        <View style={{flex: 1}}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Launch</Text>
        </View>
    );
};

export default Launch;