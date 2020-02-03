import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colours } from '../../colours';

import Avatar from './Avatar'
import Username from './Username'

const UserCard = props => {

    const goToProfile = () => {

        if (!props.cancelPress) {
            console.log(props.navigation)
            props.navigation.navigate('Profile', { 'user': props.user.pk })
        }
    };

    return (
        <TouchableOpacity
            style={[styles.container, props.style]}
            onPress={goToProfile}>
            <View style={styles.containerInner}>
                <Avatar
                    style={{ marginRight: 0 }}
                    size={props.size}
                    avatar={props.user.avatar_url} />
                <Username
                    style={styles.username}
                    name={props.user.name}
                    size={props.size}
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