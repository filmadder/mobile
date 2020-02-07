import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colours } from '../../colours';

const IconButton = props => {
    const icon = <Icon name={props.name} size={props.size || 24} color={props.color || colours.blue3} />

    console.log(icon)

    return (
        <TouchableOpacity
            style={[{ alignItems: 'center', padding: 10 }, props.style]}
            activeOpacity={.6}
            onPress={props.onPress}>
            {icon}
        </TouchableOpacity>
    )
};

export default IconButton;