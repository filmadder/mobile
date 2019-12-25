import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { colours } from '../../colours';

const FaButton = props => {
    return (
        <TouchableOpacity
            style={{ alignItems: 'center' }}
            activeOpacity={.6}
            onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colours.blue2,
        borderRadius: 30,
        paddingVertical: 8,
        paddingHorizontal: 36,
        elevation: 0.5,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowColor: colours.black,
        shadowRadius: 2,
        shadowOpacity: 0.3,
        margin: 10
    },
    buttonTitle: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'Pacifico-Regular' : 'Pacifico-Regular',
        color: 'white',
    }
});

export default FaButton;