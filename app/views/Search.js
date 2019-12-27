import React from 'react';
import { StyleSheet } from 'react-native';

import SearchForm from '../components/search/SearchForm';
import Results from '../components/search/Results';
import ViewWrapper from './ViewWrapper';

const Search = props => {
    const [type, setType] = React.useState('films');
    const [query, setQuery] = React.useState(null);

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
    searchForm: {
        paddingBottom: 30,
    }
});

export default Search;