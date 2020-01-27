import React from 'react';
import { TouchableOpacity, Image, StyleSheet  } from 'react-native';

const DrawerBtn = props => {

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <TouchableOpacity onPress={toggleDrawer}>
            <Image
                style={s.menuBtn}
                source={require('../../../assets/images/logo.png')} />
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    menuBtn: {
        height: 40,
        width: 40,
    }
})

export default DrawerBtn;