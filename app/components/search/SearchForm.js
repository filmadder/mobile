import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import SearchDropdownItem from './SearchDropdownItem'

import { colours } from '../../colours';
import { searches } from '../../constants/filters';

const SearchForm = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');

    const dropdownItems = searches.map(item =>
        <SearchDropdownItem
            key={item.id}
            handleDropdown={item => onDropdownSelected(item)}
            item={item} />
    );

    const dropdown = <View style={s.dropdown}>{dropdownItems}</View>
    
    const onDropdownSelected = item => {
        setIsOpen(!isOpen);
    };

    const onButtonClick = () => {
        if (query.length > 0) {
            props.onSearch(query)
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

    const showDropdown = () => {
        setIsOpen(!isOpen);
        setQuery('');
    };

    return (
        <View style={[s.container, props.style]}>
            <View style={s.searchForm}>
                <TextInput
                    style={s.textField}
                    placeholder='type here'
                    value={query}
                    onSubmitEditing={() => onButtonClick()}
                    onChangeText={text => handleTyping(text)}></TextInput>
                <TouchableOpacity
                    style={s.button}
                    onPress={() => onButtonClick()}>
                    <Text style={s.type}>{props.type}</Text>
                </TouchableOpacity>
            </View>
            {isOpen && dropdown}
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
    textField: {
        flex: 5,
        fontSize: 18,
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