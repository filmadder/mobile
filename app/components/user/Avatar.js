import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colours } from '../../colours';
import JdentIcon from './JdentIcon';

const Avatar = props => {
    let size = null;
    let marginRight = null;
    const name = props.name || 'default';
    
    switch (props.size) {
        case 'large':
            size = 60;
            marginRight = 20;
            break;
        case 'medium':
            size = 30;
            marginRight = 10;
            break;
        case 'small':
            size = 10;
            marginRight = 10;
            break;
        default:
            size = 30;
            marginRight = 10;
    };

    return (
        <View style={[styles.avatarContainer]}>
            <View style={[{marginRight}, props.style]}>
                <JdentIcon
                    value={name}
                    size={size} />
            </View>
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