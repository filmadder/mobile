import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Avatar from './Avatar';

const AvatarLink = props => {

    const handlePress = () => {
        if (props.onPress) {
            props.onPress()
        } else {
            props.navigation.push('Profile', { user: props.user })
        }
    }

    return (
        <TouchableOpacity
            onPress={() => {}}
            style={props.style}>
            <Avatar
                avatar={props.user.avatar_url} />
        </TouchableOpacity>
    )
};

export default withNavigation(AvatarLink);