import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import SearchForm from '../components/search/SearchForm';
import Results from '../components/search/Results';
import ViewWrapper from './ViewWrapper';
import FaSmallButton from '../components/dom/FaSmallButton';
import {screen} from '../constants/device';
import {ThemeContext} from '../context/theme';
import ws from '../ws';

const Search = () => {
  const route = useRoute();
  const theme = React.useContext(ThemeContext);
  const [results, setResults] = React.useState([]);
  const [searchDone, setSearchDone] = React.useState('notset');
  const [hasMoreResults, setHasMoreResults] = React.useState(false);
  const [type, setType] = React.useState();
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    let listener = EventRegister.addEventListener('moreResults', () => {
      setHasMoreResults(true);
    });

    return () => EventRegister.removeEventListener(listener);
  }, []);

  const resultsRef = React.createRef();

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
    setSearchDone('notset');
    setResults([]);
  };

  const search = (query, type) => {
    setType(type);
    setQuery(query);
    setResults([]);
    setSearchDone('searching');

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
          setSearchDone('searched');
        })
        .catch(err => {
          console.warn(err);
        });
    }
  };

  const showMoreResults = () => {
    search(query, type);
    setHasMoreResults(false);

    if (results.length > 0) {
      resultsRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  };

  /*
    RENDER
  */
  return (
    <ViewWrapper>
      <View style={{height: '100%'}}>
        <SearchForm
          onTypeChange={onTypeChange}
          navigationType={route.params.search}
          style={s.searchForm}
          onSearch={search}
          onFocus={() => setSearchDone(false)}
        />
        {hasMoreResults && (
          <FaSmallButton
            style={{paddingBottom: 20}}
            title="more results found"
            onPress={showMoreResults}
          />
        )}
        {/* has results */}
        {results.length > 0 && (
          <Results
            ref={resultsRef}
            results={results}
            type={type}
            style={{paddingHorizontal: screen.width < 400 ? 20 : 30}}
          />
        )}
        {/* no results */}
        {searchDone === 'searched' && results.length === 0 && (
          <Text
            style={{
              paddingHorizontal: screen.width < 400 ? 20 : 30,
              color: theme.colors.text,
            }}>
            no results for {type}
          </Text>
        )}
        {searchDone === 'searching' && (
          <Text
            style={{
              paddingHorizontal: screen.width < 400 ? 20 : 30,
              color: theme.colors.text,
            }}>
            searching...
          </Text>
        )}
      </View>
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
