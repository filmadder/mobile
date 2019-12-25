import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { colours } from '../colours';

const SettingsSection = props => {
    const button = props.btnText
        ? <Button title={props.btnText} />
        : null;

    return (
        <View style={[s.container, props.style]}>
            <View style={s.header}>
                <Text style={s.title}>{props.title}</Text>
                {button}
            </View>
            <View style={s.content}>
                {props.children}
            </View>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 45,
        marginHorizontal: 30
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: colours.blue4
    },
    title: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 16,
        color: colours.blue4
    },
    content: {
        paddingVertical: 30,
    }
});

export default SettingsSection;