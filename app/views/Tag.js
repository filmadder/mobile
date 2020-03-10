import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

import ViewTitle from '../components/ViewTitle';
import UserRow from '../components/user/UserRow';
import FilmCard from '../components/FilmCard';
import ViewWrapper from './ViewWrapper';
import {colours} from '../colours';

const Tag = props => {
  const data = props.navigation.getParam('data');

  return (
    <ViewWrapper>
      <FlatList
        ListHeaderComponent={<ViewTitle title={data.tag} style={s.tag} />}
        data={data.users}
        keyExtractor={item => item.pk.toString()}
        renderItem={({item}) => (
          <View style={s.userContainer}>
            <UserRow
              style={s.username}
              user={{name: item.name, pk: item.pk}}
              size="large"
            />
            <Text style={s.total}>{item.films.length} films</Text>
            <FlatList
              style={s.filmsContainer}
              horizontal
              data={item.films}
              keyExtractor={item => item.pk.toString()}
              renderItem={({item}) => <FilmCard style={s.film} film={item} />}
            />
          </View>
        )}
      />
    </ViewWrapper>
  );
};

const s = StyleSheet.create({
  tag: {
    paddingTop: 20,
  },
  film: {
    padding: 30,
  },
  filmsContainer: {
    paddingVertical: 20,
  },
  userContainer: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  total: {
    fontSize: 17,
    fontFamily: 'SourceSansPro-Bold',
    color: colours.blue5,
    paddingBottom: 20,
  },
});

export default Tag;
