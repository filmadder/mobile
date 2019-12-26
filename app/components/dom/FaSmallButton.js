import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const FaSmallButton = props => {
    return (
        <TouchableOpacity
            style={[{ alignItems: 'center' }, props.style]}
            activeOpacity={.8}
            onPress={props.onPress}>
            <View style={s.button}>
                <Text style={s.buttonTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    button: {
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 3,
        borderColor: colours.blue4,
        borderWidth: 1,
    },
    buttonTitle: {
        fontFamily: 'SourceSansPro-Regular',
        color: colours.blue4,
        fontSize: 14
    }
})

export default FaSmallButton;