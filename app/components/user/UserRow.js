import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import Avatar from './Avatar';
import Username from './Username';

const UserRow = props => {
    let avatar = null;

    switch (props.size) {
        case 'large':
            avatar = {
                height: 60,
                width: 60,
                marginRight: 20,
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
        <TouchableOpacity
            style={[s.container, props.style]}
            onPress={props.onPress}>
            <Avatar
                avatar={props.user.avatar_url}
                style={avatar} />
            <Username
                name={props.user.name}
                size={props.size} />
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
})

export default withNavigation(UserRow);