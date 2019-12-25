import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import Avatar from '../../Avatar';
import UserRow from '../../user/UserRow';
import { colours } from '../../../colours';

const UserResult = props => {
    return (
        <View style={s.container}>
            <UserRow
                size={'large'}
                username='Stela' />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
    },
})

export default UserResult;