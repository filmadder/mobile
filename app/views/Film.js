import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ViewWrapper from './ViewWrapper';
import Header from '../components/film/Header';
import Info from '../components/film/Info';
import Watchers from '../components/film/Watchers';
import Thoughts from '../components/film/Thoughts';
import ThoughtTextArea from '../components/film/ThoughtTextArea';

import { screen } from '../constants/device';
import ws from '../ws';

const Film = props => {
    const [film, setFilm] = React.useState({});
    const filmId = props.navigation.getParam('filmId');
    const padding = screen.width < 400
        ? { padding: 20 }
        : { padding: 30 };

    React.useEffect(() => {
        // gets the film info
        getFilm();

    }, [])

    const getFilm = () => {
        ws.send({
            type: "get_film",
            film: filmId,
            id: null
        })
        .then(data => {
            setFilm(data)
        })
        .catch(err => (console.warn(err)))
    }

    const reloadFilm = () => {
        getFilm();
    }

    // RENDER
    if (Object.entries(film).length === 0) {
        return (<ViewWrapper>
                    <Text>loader</Text>
                </ViewWrapper>)
    }

    return (
        <View>
            <ViewWrapper
                style={s.view}>
                <Header
                    filmId={filmId}
                    style={padding}
                    poster={film.film.poster_url}
                    title={film.film.title}
                    type={film.film.omdb_type}
                    year={film.film.year}
                    country={film.film.countries}
                    duration={film.film.runtime}
                    status={film.status} />
                <Info
                    style={padding}
                    directors={film.film.directors}
                    writers={film.film.writers}
                    actors={film.film.actors}
                    synopsis={film.film.plot} />
                <Watchers
                    key='watchers_past'
                    style={padding}
                    type={'Seen'}
                    watchers={film.watchers_past} />
                <Watchers
                    key='watchers_present'
                    style={padding}
                    type={'Currently Watching'}
                    watchers={film.watchers_present} />
                <Watchers
                    key='watchers_future'
                    style={padding}
                    type={'Watchlist'}
                    watchers={film.watchers_future} />
                <Thoughts
                    reloadFilm={reloadFilm}
                    style={padding}
                    filmId={filmId}
                    thoughts={film.comments} />
                <ThoughtTextArea
                    reloadFilm={reloadFilm}
                    filmId={filmId}
                    style={{paddingHorizontal: 20}} />
            </ViewWrapper>

        </View>
    )
};

const s = StyleSheet.create({
    view: {
        paddingHorizontal: 0,
        paddingVertical: 0
    }
});

export default Film;