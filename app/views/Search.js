import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import SearchForm from '../components/search/SearchForm';
import Results from '../components/search/Results';
import ViewWrapper from './ViewWrapper';

const Search = () => {
    const [type, setType] = React.useState('films');
    const [query, setQuery] = React.useState('');

    const onSearch = (type, query) => {
        setType(type);
        setQuery(query);
    };

    const results = <Results
            type={type}
            query={query} />

    return (
        <ViewWrapper>
            <SearchForm
                style={s.searchForm}
                onSearch={onSearch} />
            {query && results}
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     paddingHorizontal: 30,
    //     paddingTop: 100,
    //     paddingBottom: 45,
    // },
    searchForm: {
        paddingBottom: 30,
    }
});

export default Search;