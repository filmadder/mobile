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
            <View style={s.textContainer}>
                <Text style={s.text}>{props.text}</Text>
            </View>
            <Checkbox
                checked={props.checked}
                onCheckboxChange={onCheckboxChange} />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15,
        // backgroundColor: 'red
    },
    textContainer: {
        marginRight: 20,
        marginTop: 5,
    },
    text: {
        color: colours.black,
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 15,
    },
});

export default CheckboxField;
