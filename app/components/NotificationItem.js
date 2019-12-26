import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserRow from '../components/user/UserRow';

import { colours } from '../colours'

const NotificationItem = props => {
    return (
        <View style={[s.container, props.style]}>
            <View style={s.action}>
                <UserRow
                    username={props.username}
                    size='large' />
                <Text style={s.text}>{props.text}</Text>
            </View>
            {props.children}
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        padding: 30,
        borderBottomWidth: 1, 
        borderBottomColor: colours.blue4,
    },
    action: {
        alignItems: 'center'
    },
    text: {
        color: colours.black,
        fontSize: 15,
        margin: 5,
    }
});

export default NotificationItem;