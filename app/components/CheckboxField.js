import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Checkbox from './dom/Checkbox'
import { colours } from '../colours';

const CheckboxField = props => {

    const onCheckboxChange = currentState => {
        props.onCheckboxChange(currentState)
    };

    return (
        <View style={[s.container, props.style]}>
            <Text style={s.text}>{props.text}</Text>
            <Checkbox onCheckboxChange={onCheckboxChange} />
        </View>
    )
};





const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    text: {
        marginRight: 20,
        color: colours.black,
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 15,
    }
});

export default CheckboxField;
