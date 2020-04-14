import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ViewWrapper from './ViewWrapper';
import Header from '../components/film/Header';
import Info from '../components/film/Info';
import Watchers from '../components/film/Watchers';
import Thoughts from '../components/film/Thoughts';
import ThoughtTextArea from '../components/film/ThoughtTextArea';
import Loader from '../components/Loader';
import {screen} from '../constants/device';
import {useWS} from '../ws';

const Film = () => {
  const route = useRoute();
  const filmId = route.params.filmId;
  const [film, getFilm] = useWS('get_film', {film: filmId});
  const padding = screen.width < 400 ? {padding: 20} : {padding: 30};

  // RENDER
  if (film === null) {
    return <Loader />;
  }

  return (
    <ViewWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : null}>
        <ScrollView>
          <Header
            filmId={filmId}
            style={padding}
            poster={film.film.poster_url}
            title={film.film.title}
            type={film.film.omdb_type}
            year={film.film.year}
            country={film.film.countries}
            duration={film.film.runtime}
            reloadFilm={getFilm}
            status={film.status}
          />
          <Info
            style={padding}
            directors={film.film.directors}
            writers={film.film.writers}
            actors={film.film.actors}
            synopsis={film.film.plot}
          />
          {film.watchers_past.length > 0 && (
            <Watchers
              style={padding}
              type={'Seen'}
              filmId={filmId}
              filmTitle={film.film.title}
              reloadFilm={getFilm}
              watchers={film.watchers_past}
            />
          )}
          {film.watchers_present.length > 0 && (
            <Watchers
              style={padding}
              type={'Currently watching'}
              filmId={filmId}
              watchers={film.watchers_present}
            />
          )}
          {film.watchers_future.length > 0 && (
            <Watchers
              style={padding}
              type={'Watchlist'}
              filmId={filmId}
              watchers={film.watchers_future}
            />
          )}

          <Thoughts
            reloadFilm={getFilm}
            style={padding}
            filmId={filmId}
            thoughts={film.comments}
            status={film.status}
          />
          <ThoughtTextArea
            reloadFilm={getFilm}
            filmId={filmId}
            style={{paddingHorizontal: 20}}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ViewWrapper>
  );
};

export default Film;
