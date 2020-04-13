import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PlaceholderPoster from './PlaceholderPoster';
import {colours} from '../colours';
import {ThemeContext} from '../context/theme';

const FilmCard = props => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);
  const handleCardPress = () => {
    navigation.push('Film', {filmId: props.film.pk});
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
    <TouchableOpacity
      style={[s.card, props.style]}
      onPress={handleCardPress}
      activeOpacity={1}>
      {props.film.poster_url ? poster : placeholderPoster}
      <View style={s.infoContainer}>
        <Text style={[s.title, titleFont, {color: theme.colors.text}]}>
          {props.film.title}
        </Text>
        {props.film.directors !== '' && (
          <Text style={[s.director, {color: theme.colors.text}]}>
            {getDirectors()}
          </Text>
        )}
        {props.film.year !== '' && (
          <Text style={[s.year, {color: theme.colors.text}]}>
            {props.film.year}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
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
    marginBottom: 7,
    flexWrap: 'wrap',
    maxWidth: 240,
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

export default FilmCard;
