import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import SearchForm from '../components/search/SearchForm';
import Results from '../components/search/Results';
import ViewWrapper from './ViewWrapper';
import ws from '../ws';

const Search = props => {
    const [results, setResults] = React.useState([]);
    const [searchDone, setSearchDone] = React.useState(false);
    const [type, setType] = React.useState();

    const addFilter = (query, type) => {
        switch(type) {
            case 'tags':
                return query + ' t!'
            case 'directors':
                return query + ' d!'
            case 'users':
                return query + ' u!'
            default:
                return query
        }
    }

    const onTypeChange = type => {
        setType(type)
        setSearchDone(false)
        setResults([])
    };

    const search = (query, type) => {

        setType(type)

        if (query.length > 0) {

            // adds the bang according to the serach type
            query = addFilter(query, type)

            ws.send({
                type: "search",
                query: query,
                id: null
            })
            .then(data => {
                setResults(data.films || data.users)
                setSearchDone(true)
            })
            .catch(err => {
                console.warn(err)
            })
        }
    };

    /*
        RENDER
    */
    return (
        <ViewWrapper>
            <ScrollView>
                <SearchForm
                    onTypeChange={onTypeChange}
                    navigationType={props.navigation.getParam('search')}
                    style={s.searchForm}
                    onSearch={search}
                    onFocus={() => setSearchDone(false)} />
                {/* has results */}
                {(results.length > 0) && (
                    <Results
                        results={results}
                        type={type} />
                )}
                {/* no results */}
                {(searchDone && Object.entries(results).length === 0) && (
                    <Text>no results for {type}</Text>
                )}
            </ScrollView>
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    searchForm: {
        paddingVertical: 10,
    }
});

export default Search;