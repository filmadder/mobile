import React from 'react';
import { View, Text } from 'react-native';
import FaButton from '../components/dom/FaButton';
import RNRestart from 'react-native-restart';

const Error = props => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{props.error}</Text>
            <FaButton
                title='reload'
                onPress={() => RNRestart.Restart()}></FaButton>
        </View>
    )
};

export default Error;
