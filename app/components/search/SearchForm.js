import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import SearchFilters from './SearchFilters';

import { colours } from '../../colours';
import { searchTypes } from '../../constants/filters';

const SearchForm = props => {
    const [query, setQuery] = React.useState('');
    const [type, setType] = React.useState(props.navigationType || 'films');

    React.useEffect(() => {
        if (query) {
            search();
        }
    }, [type]) 

    const search = () => {
        if (query.trim().length > 0) {
            props.onSearch(query.trim(), type)
        }
    };

    const onTypeSelected = type => {
        setType(type);
        props.onTypeChange(type);
    }

    return (
        <View>
            <View style={[s.formContainer, props.style]}>
                <View style={s.searchForm}>
                    <TextInput
                        {...props}
                        style={s.textField}
                        placeholder='type here'
                        value={query}
                        onSubmitEditing={search}
                        onChangeText={text => setQuery(text)}></TextInput>
                    <TouchableOpacity
                        style={s.buttonContainer}
                        onPress={search}>
                        <Text style={s.button}>search</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SearchFilters
                onTypeSelected={onTypeSelected}
                searchTypes={searchTypes}
                type={type} />
        </View>
    )
};

const s = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
    },
    searchForm: {
        maxWidth: 450,
        flexDirection: 'row',
        width: '100%',
        borderColor: colours.blue4,
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        paddingHorizontal: 30,
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
    buttonContainer: {
        flex: 2,
        paddingLeft: 15,
        justifyContent: 'center',
    },
    button: {
        textAlign: 'center',
        fontFamily: 'Pacifico-Regular',
        color: colours.blue4,
        fontSize: 20,
    }
});

export default SearchForm;