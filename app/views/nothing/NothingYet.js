import React from 'react';
import { View, Text, Button, StyleSheet, PointPropType } from 'react-native';

import FaButton from '../../components/dom/FaButton';
import { colours } from '../../colours';

const NothingYet = props => {
    return (
        <View style={s.container}>
            <Text style={s.title}>{props.title}</Text>
            <Text style={s.text}>{props.text}</Text>
            <FaButton
                style={s.button}
                title={props.buttonTitle}
                onPress={props.onPress} />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 60
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        color: colours.blue3,
        fontSize: 24,
        paddingBottom: 30,
    },
    text: {
        fontSize: 16,
        color: colours.black,
        marginBottom: 30,
    },
})

export default NothingYet;