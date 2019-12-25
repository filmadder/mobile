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
            };
            break;
        case 'medium':
            break;
        case 'small':
            avatar = {
                height: 30,
                width: 30,
            };
            break;
        default:
            avatar = {
                height: 30,
                width: 30,
            };
    };

    return (
        <View style={s.container}>
            <Avatar
                size={avatar}/>
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
    username: {
        color: colours.black,
    }
})

export default UserRow;