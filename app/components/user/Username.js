import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const Username = props => {
    let styles = null;

    switch (props.size) {
        case 'large': {
            styles = {
                fontFamily: 'Pacifico-Regular',
                fontSize: 22,
                color: colours.black
            }
        }
        break;
        case 'small': {
            styles = {
                fontFamily: 'SourceSansPro-Bold',
                fontSize: 14,
                textTransform: 'uppercase',
            }
        }
        break;
        default:
            styles = {
                fontFamily: 'SourceSansPro-Bold',
                fontSize: 14,
                textTransform: 'uppercase',
                color: colours.black
            }
    }

    return (
        <Text style={[s.username, styles, props.style]}>{props.username}</Text>
    )
};

const s = StyleSheet.create({
    username: {
        textAlign: 'center',
        color: colours.black,
        padding: 3,
    }
});

export default Username;