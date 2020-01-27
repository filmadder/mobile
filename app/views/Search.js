import React from 'react';
import { StyleSheet, Text } from 'react-native';

import SearchForm from '../components/search/SearchForm';
import Results from '../components/search/Results';
import ViewWrapper from './ViewWrapper';

import ws from '../ws';

const Search = props => {
    const [type, setType] = React.useState();
    const [results, setResults] = React.useState([]);

    const searchType = props.navigation.getParam('search', 'films');

    React.useEffect(() => {
        if (searchType) {
            setType(searchType)
        }
        console.log(searchType)
    }, [searchType])

    const onSearch = (type, query) => {

        if (query.length > 0) {
            ws.send({
                type: "search",
                query: query,
                id: null
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.warn(err)
            })
        }
    };

    // render
    if (Object.entries(results).length === 0) {
        return (<ViewWrapper>
                <SearchForm
                    type={type ? type : 'films'}
                    style={s.searchForm}
                    onSearch={onSearch} />
                    <Text>loading</Text>
                </ViewWrapper>)
    } else {

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
    }
};

const s = StyleSheet.create({
    searchForm: {
        paddingBottom: 30,
    }
});

export default Search;