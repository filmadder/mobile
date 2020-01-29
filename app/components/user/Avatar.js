import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
// import { withNavigation } from 'react-navigation';

import { colours } from '../../colours';
import { server } from '../../settings';

const Avatar = props => {
    let size = {
        height: 30,
        width: 30,
        marginRight: 10,
    };
    // avatar url
    const avatar = props.avatar
        ? server + props.avatar
        : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fvulture%2F2018%2F11%2F02%2F02-avatar-2.w700.h700.jpg&f=1&nofb=1';
    
    switch (props.size) {
        case 'large':
            size = {
                height: 60,
                width: 60,
                marginRight: 20,
            };
            break;
        case 'medium':
            size = {
                height: 30,
                width: 30,
                marginRight: 10,
            };
            break;
        case 'small':
            size = {
                height: 20,
                width: 20,
                marginRight: 10,
            };
            break;
        default:
            size = {
                height: 30,
                width: 30,
                marginRight: 10,
            };
    };

    return (
        <View style={[styles.avatarContainer, size, props.style]}>
            <Image
                source={{uri: avatar}}
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
    },
    avatar: {
        borderRadius: 60,
        height: '100%',
        width: '100%',
    },
});

export default Avatar;