import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../colours';

const ViewTitle = props => {
    return (
        <View style={[s.container, props.style]}>
            <Text style={s.title}>{props.title}</Text>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        color: colours.blue4,
        fontSize: 22,
    }
});

export default ViewTitle;