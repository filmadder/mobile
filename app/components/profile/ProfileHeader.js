import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colours } from '../../colours';

import Avatar from '../user/Avatar'
import Username from '../user/Username'

const ProfileHeader = props => {
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
        marginTop: 20,
    }
});

export default ProfileHeader;