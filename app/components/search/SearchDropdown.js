import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const SearchDropdown = props => {

    const filterItems = props.searchTypes.map(item => {
        const selected = props.type === item.filter;

        return <TouchableOpacity
            key={item.id}
            style={[s.filterContainer]}
            onPress={() => selectItem(item.filter)}>
            <Text style={[s.filterItem, selected && s.filterItemSelected]}>{item.filter}</Text>
        </TouchableOpacity>
    });

    const selectItem = item => {
        props.onTypeSelected(item);
    };

    return (
        <View style={s.container}>
            <View style={s.filters}>
                {filterItems}
            </View>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    currentType: {
        paddingLeft: 3,
    },
    filters: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
    filterContainer: {
        paddingVertical: 5,
        paddingHorizontal: 8,
        margin: 5,
        borderRadius: 3,
    },
    filterItem: {
        fontSize: 17,
        fontFamily: 'SourceSansPro-Regular',
        color: colours.blue4,
    },
    filterItemSelected: {
        fontWeight: 'bold'
    }
});

export default SearchDropdown;