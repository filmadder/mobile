import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colours } from '../colours';

import Avatar from './Avatar'

const ProfileHeader = props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerInner}>
                <Avatar />
                <Text style={styles.username}>stelaseldano</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: 'transparent',
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
        marginTop: 10,
    }
});

export default ProfileHeader;