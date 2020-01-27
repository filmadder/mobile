import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colours } from '../../colours';

import Avatar from './Avatar'
import Username from './Username'

const UserCard = props => {

    return (
        <TouchableOpacity
            style={[styles.container, props.style]}
            onPress={() => {}}>
            <View style={styles.containerInner}>
                <Avatar
                    avatar={props.user.avatar} />
                <Username
                    style={styles.username}
                    user={props.user}
                    navigation={props.navigation} />
            </View>
        </TouchableOpacity>
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