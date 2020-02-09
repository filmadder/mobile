import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const LabelBtn = props => {

    const handlePress = () => {
        props.navigation.navigate(props.label)
        props.navigation.closeDrawer()
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={s.container}>
            <Text style={s.label}>{props.label}</Text>
        </TouchableOpacity>  
    )
};

const s = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        paddingVertical: 7,
        margin: 10,
    },
    label: {
        fontFamily: Platform.OS === 'android' ? 'Pacifico-Regular' : 'Pacifico',
        color: colours.blue4,
        fontSize: 20,
        width: '100%',
    }
})

export default LabelBtn;