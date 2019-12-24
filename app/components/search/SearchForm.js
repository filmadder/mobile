import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import SearchDropdownItem from './SearchDropdownItem'

import { colours } from '../../colours';
import { searches } from '../../constants/filters';

const SearchForm = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [current, setCurrent] = React.useState('films');

    const dropdownItems = searches.map(item =>
        <SearchDropdownItem
            key={item.id}
            handleDropdown={item => onDropdownSelected(item)}
            item={item} />
    );

    const dropdown = isOpen
        ? <View
            style={s.dropdown}>{dropdownItems}</View>
        : null;
    
    const onDropdownSelected = item => {
        setCurrent(item)
        setIsOpen(!isOpen);
    };

    const onSearch = () => {
        if (query.trim().length > 0) {
            search();
        } else {
            showDropdown();
        }
    };

    const handleTyping = text => {
        setQuery(text);

        if (isOpen) {
            setIsOpen(false)
        }
    };

    const search = () => {
        console.log('searching ' + query + ' in ' + current)
    };

    const showDropdown = () => {
        setIsOpen(!isOpen);
        setQuery('');
    };

    return (
        <View style={s.container}>
            <View style={s.searchForm}>
                <TextInput
                    style={s.field}
                    placeholder='type here'
                    value={query}
                    onChangeText={text => handleTyping(text)}></TextInput>
                <TouchableOpacity
                    style={s.button}
                    onPress={() => onSearch()}>
                    <Text style={s.type}>{current}</Text>
                </TouchableOpacity>
            </View>
            {dropdown}
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
    },
    searchForm: {
        flexDirection: 'row',
        width: '100%',
        borderColor: colours.blue4,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    dropdown: {
        paddingRight: 30,
        paddingVertical: 10,
    },
    field: {
        flex: 5,
        fontSize: 20,
        fontFamily: 'SourceSansPro-SemiBold',
        color: colours.blue4,
        paddingVertical: 15,
        paddingRight: 15,
        borderRightWidth: 1,
        borderRightColor: colours.blue4,
    },
    button: {
        flex: 2,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    type: {
        textAlign: 'center',
        fontFamily: 'Pacifico-Regular',
        color: colours.blue4,
        fontSize: 20,
    }
});

export default SearchForm;