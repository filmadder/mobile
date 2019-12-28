import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colours } from '../../colours';
import { withNavigation } from 'react-navigation';

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
                fontSize: 16,
            }
        }
        break;
        default:
            styles = {
                fontFamily: 'SourceSansPro-Bold',
                fontSize: 16,
                color: colours.black
            }
    }

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile', { user: props.user })}>
            <Text style={[s.username, styles, props.style]}>{props.user.name}</Text>
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    username: {
        textAlign: 'center',
        color: colours.black,
        padding: 3,
    }
});

export default withNavigation(Username);