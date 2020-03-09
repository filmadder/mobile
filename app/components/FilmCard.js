import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import PlaceholderPoster from './PlaceholderPoster';
import {colours} from '../colours';

const FilmCard = props => {
  const handleCardPress = () => {
    props.navigation.push('Film', {filmId: props.film.pk});
  };

  const placeholderPoster = <PlaceholderPoster />;
  const poster = (
    <Image source={{uri: props.film.poster_url}} style={s.poster} />
  );
  const titleFont = {
    fontSize: props.film.title.length < 40 ? 24 : 18,
  };
  const getDirectors = () => {
    const list = props.film.directors.split(', ');

    if (list.length > 2) {
      return list.slice(0, 2).join(', ') + '...';
    }

    return list.join(', ');
  };

  return (
    <TouchableOpacity style={[s.card, props.style]} onPress={handleCardPress}>
      {props.film.poster_url ? poster : placeholderPoster}
      <View style={s.infoContainer}>
        <Text style={[s.title, titleFont]}>{props.film.title}</Text>
        {props.film.directors !== '' && (
          <Text style={s.director}>{getDirectors()}</Text>
        )}
        {props.film.year !== '' && (
          <Text style={s.year}>{props.film.year}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
  },
  poster: {
    height: 170,
    width: 125,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'SourceSansPro-Bold',
    color: colours.black,
    marginBottom: 7,
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  director: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 15,
    color: colours.black,
    textTransform: 'uppercase',
    paddingBottom: 5,
  },
  year: {
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 16,
    color: colours.black,
  },
});

export default withNavigation(FilmCard);
