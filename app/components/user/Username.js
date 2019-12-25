import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const Username = props => {
    let styles = null;

    switch (props.size) {
        case 'large': {
            styles = {
                fontFamily: 'Pacifico-Regular',
                marginLeft: 20,
                fontSize: 22,
            }
        }
        break;
        case 'small': {
            styles = {
                fontFamily: 'SourceSansPro-Bold',
                marginLeft: 10,
                fontSize: 14,
                textTransform: 'uppercase',
            }
        }
        break;
        default:
            styles = {
                fontFamily: 'Pacifico-Regular',
                marginLeft: 20,
                fontSize: 22,
            }
    }

    return (
        <View>
            <Text style={[s.username, styles]}>{props.username}</Text>
        </View>
    )
};

const s = StyleSheet.create({
    username: {
        color: colours.black
    }
});

export default Username;