import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchForm from '../components/search/SearchForm';

const Search = () => {
    return (
        <View style={s.container}>
            <SearchForm />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});

export default Search;