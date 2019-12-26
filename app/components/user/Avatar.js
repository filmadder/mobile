import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const Avatar = props => {
    return (
        <View style={[styles.avatarContainer, props.style]} >
            <Image
                source={{uri: 'http://fakewalls.com/storage/Grimes%20Claire%20Boucher.jpg?__SQUARESPACE_CACHEVERSION=1331323085328'}}
                style={styles.avatar} />
        </View>
    )
};

const styles = StyleSheet.create({
    avatarContainer: {
        elevation: 5,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowColor: colours.black,
        shadowRadius: 2,
        shadowOpacity: 0.3,
        height: 60,
        width: 60,
    },
    avatar: {
        borderRadius: 60,
        height: '100%',
        width: '100%',
    },
});

export default Avatar;