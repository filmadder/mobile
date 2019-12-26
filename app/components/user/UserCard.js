import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colours } from '../../colours';

import Avatar from './Avatar'
import Username from './Username'

const UserCard = props => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.containerInner}>
                <Avatar />
                <Username
                    style={styles.username}
                    username='stelaseldano' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    containerInner: {
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 20,
    },
    username: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 22,
        color: colours.black,
        marginTop: 20,
    }
});

export default UserCard;