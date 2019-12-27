import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const DrawerBtn = props => {

    return (
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <Text>menu</Text>
        </TouchableOpacity>
    )
};

export default DrawerBtn;