import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colours } from '../../colours';

const SearchDropdownItem = props => {
    return (
        <TouchableOpacity
            onPress={() => props.handleDropdown(props.item.filter)}>
            <Text style={s.text}>{props.item.filter}</Text>
        </TouchableOpacity>
    )
};

const s = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontFamily: 'Pacifico-Regular',
        color: colours.blue4,
        fontSize: 20,
    }
})

export default SearchDropdownItem;