import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Avatar from '../components/Avatar';
import { colours } from '../colours';

const UserRow = props => {
    let avatar = null;
    let username = null;

    switch (props.size) {
        case 'large':
            avatar = {
                height: 60,
                width: 60,
            };
            username = {
                fontFamily: 'Pacifico-Regular',
                marginLeft: 20,
                fontSize: 22,
            };
            break;
        case 'medium':
            break;
        case 'small':
            avatar = {
                height: 30,
                width: 30,
            };
            username = {
                fontFamily: 'SourceSansPro-Bold',
                marginLeft: 10,
                fontSize: 14,
                textTransform: 'uppercase',
            };
            break;
        default:
            avatar = {
                height: 30,
                width: 30,
            };
            username = {
                fontFamily: 'SourceSansPro-Bold',
                marginLeft: 10,
                fontSize: 14,
                textTransform: 'uppercase',
            };
    };

    return (
        <View style={s.container}>
            <Avatar size={avatar}/>
            <Text style={[s.username, username]}>{props.username}</Text>
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