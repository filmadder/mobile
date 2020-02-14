import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import FaButton from '../components/dom/FaButton';

const Error = props => {
    const error = props.navigation.getParam('error');

    return (
        <View style={s.container}>
            <Text>{error}</Text>
            <FaButton
                title='retry'
                onPress={() => props.navigation.goBack()} />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Error;