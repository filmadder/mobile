import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Avatar from './Avatar';
import Username from './Username';
import { colours } from '../../colours';

const UserRow = props => {
    let avatar = null;

    switch (props.size) {
        case 'large':
            avatar = {
                height: 60,
                width: 60,
                marginRight: 10,
            };
            break;
        case 'medium':
            avatar = {
                height: 30,
                width: 30,
                marginRight: 10,
            };
            break;
        case 'small':
            avatar = {
                height: 20,
                width: 20,
                marginRight: 10,
            };
            break;
        default:
            avatar = {
                height: 30,
                width: 30,
                marginRight: 10,
            };
    };

    return (
        <View style={[s.container, props.style]}>
            <Avatar
                size={avatar} />
            <Username
                username={props.username}
                size={props.size} />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
})

export default UserRow;