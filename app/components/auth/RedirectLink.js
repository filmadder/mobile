import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RedirectLink = props => {
    return (
        <TouchableOpacity
            style={s.container}
            onPress={props.onPress}>
            <Text style={s.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    text: {
        fontSize: 17,
        fontFamily: 'SourceSansPro-Regular',
    }
});

export default RedirectLink;