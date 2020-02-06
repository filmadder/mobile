import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Avatar from './Avatar';

const AvatarLink = props => {

    const handlePress = () => {
        if (props.fromHeader) {
            props.navigation.navigate('Profile', { user: props.user.pk })
        } else {
            props.navigation.push('Profile', { user: props.user.pk })
        }
    };

    return (
        <TouchableOpacity
            style={props.style}
            onPress={handlePress}>
            <Avatar
                style={{ marginRight: 0 }}
                size={props.size}
                avatar={props.user.avatar_url} />
        </TouchableOpacity>
    )
};

export default withNavigation(AvatarLink);