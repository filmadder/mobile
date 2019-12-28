import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import UserRow from '../../user/UserRow';

const UserResult = props => {
    return (
        <View style={s.container}>
            <UserRow
                size={'large'}
                user={props.user} />
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

export default UserResult;