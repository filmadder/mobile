import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import SearchForm from '../components/search/SearchForm';
import Results from '../components/search/Results';
import ViewWrapper from './ViewWrapper';
import FaSmallButton from '../components/dom/FaSmallButton';
import {screen} from '../constants/device';
import ws from '../ws';

const Search = props => {
  const [results, setResults] = React.useState([]);
  const [searchDone, setSearchDone] = React.useState(false);
  const [hasMoreResults, setHasMoreResults] = React.useState(false);
  const [type, setType] = React.useState();
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    let listener = EventRegister.addEventListener('moreResults', () => {
      setHasMoreResults(true);
    });

    return () => EventRegister.removeEventListener(listener);
  }, []);

  const addFilter = (query, type) => {
    switch (type) {
      case 'tags':
        return query + ' t!';
      case 'directors':
        return query + ' d!';
      case 'users':
        return query + ' u!';
      default:
        return query;
    }
  };

  const onTypeChange = type => {
    setType(type);
    setSearchDone(false);
    setResults([]);
  };

  const search = (query, type) => {
    setType(type);
    setQuery(query);

    if (query.length > 0) {
      // adds the bang according to the serach type
      query = addFilter(query, type);

      ws.send({
        type: 'search',
        query: query,
        id: null,
      })
        .then(data => {
          setResults(data.films || data.users);
          setSearchDone(true);
        })
        .catch(err => {
          console.warn(err);
        });
    }
  };

  /*
    RENDER
  */
  return (
    <ViewWrapper>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <SearchForm
          onTypeChange={onTypeChange}
          navigationType={props.navigation.getParam('search')}
          style={s.searchForm}
          onSearch={search}
          onFocus={() => setSearchDone(false)}
        />
        {hasMoreResults && (
          <FaSmallButton
            style={{paddingBottom: 20}}
            title="more results found"
            onPress={() => {
              search(query, type);
              setHasMoreResults(false);
            }}
          />
        )}
        {/* has results */}
        {results.length > 0 && (
          <Results
            results={results}
            type={type}
            style={{paddingHorizontal: screen.width < 400 ? 20 : 30}}
          />
        )}
        {/* no results */}
        {searchDone && Object.entries(results).length === 0 && (
          <Text style={{paddingHorizontal: screen.width < 400 ? 20 : 30}}>
            no results for {type}
          </Text>
        )}
      </ScrollView>
    </ViewWrapper>
  );
};

const s = StyleSheet.create({
  searchForm: {
    paddingVertical: 10,
    paddingHorizontal: screen.width < 400 ? 20 : 30,
  },
});

export default Search;
