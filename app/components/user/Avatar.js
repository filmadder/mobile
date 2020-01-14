import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { colours } from '../../colours';

const Avatar = props => {
    const avatar = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fvulture%2F2018%2F11%2F02%2F02-avatar-2.w700.h700.jpg&f=1&nofb=1';

    const handlePress = () => {
        if (props.onPress) {
            props.onPress()
        } else {
            props.navigation.push('Profile', { user: props.user })
        }
    }

    return (
        <TouchableOpacity
            style={[styles.avatarContainer, props.style]}
            onPress={handlePress}>
            <Image
                source={{uri: avatar}}
                style={styles.avatar} />
        </TouchableOpacity>
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

export default withNavigation(Avatar);