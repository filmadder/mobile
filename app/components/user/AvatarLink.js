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
            style={props.style}
            onPress={() => {}}>
            <Avatar
                avatar={props.user.avatar_url} />
        </TouchableOpacity>
    )
};

export default withNavigation(AvatarLink);