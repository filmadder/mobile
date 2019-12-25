import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import FaSmallButton from '../components/dom/FaSmallButton';
import FaButton from '../components/dom/FaButton';
import SettingsEditMode from '../components/SettingsEditMode';

import { colours } from '../colours';

const SettingsSection = props => {
    const [editting, setEditting] = React.useState(false);

    const button = props.btnText
        ? <FaSmallButton
            title={props.btnText}
            onPress={() => setEditting(true)} />
        : null;

    return (
        <View style={[s.container, props.style]}>
            <SettingsEditMode
                visible={editting}
                transparent={false}>
                <View>
                    {props.children}
                    <FaButton
                        title='done'
                        onPress={() => setEditting(false)} />
                </View>
            </SettingsEditMode>

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
        paddingTop: 10,
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