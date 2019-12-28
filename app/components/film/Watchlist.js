import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserRow from '../user/UserRow';

import { colours } from '../../colours';
import { users } from '../../../data';

const Watchlist = props => {
    return (
        <View style={[s.container, props.style]}>
            <View style={s.header}>
                <Text style={s.title}>Watchlist</Text>
            </View>
            <View style={s.usersContainer}>
                <UserRow
                    style={{ paddingRight: 10 }}
                    user={users['2']} />
                <UserRow
                    style={{ paddingRight: 10 }}
                    user={users['3']} />
                <UserRow
                    style={{ paddingRight: 10 }}
                    user={users['1']} />
            </View>
        </View>
    )
};

const s = StyleSheet.create({
    title: {
        paddingBottom: 5,
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
        color: colours.blue3,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: colours.blue3,
        marginBottom: 15,
    },
    usersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default Watchlist;