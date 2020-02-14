import React from 'react';
import { Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import ViewWrapper from './ViewWrapper';
import Header from '../components/film/Header';
import Info from '../components/film/Info';
import Watchers from '../components/film/Watchers';
import Thoughts from '../components/film/Thoughts';
import ThoughtTextArea from '../components/film/ThoughtTextArea';

import { screen } from '../constants/device';
import { getLoggedUser } from '../auth';
import ws from '../ws';

const Film = props => {
    const [film, setFilm] = React.useState({});
    const [loggedUser, setLoggedUser] = React.useState();
    const filmId = props.navigation.getParam('filmId');
    const padding = screen.width < 400
        ? { padding: 20 }
        : { padding: 30 };

    React.useEffect(() => {
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
        .then(() => {
            getLoggedUser()
                .then(user => {
                    setLoggedUser(user)
                })
                .catch(err => {
                    console.warn(err)
                })
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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : null}>
            <ViewWrapper
                contentContainerStyle={s.view}>
                <Header
                    filmId={filmId}
                    style={padding}
                    poster={film.film.poster_url}
                    title={film.film.title}
                    type={film.film.omdb_type}
                    year={film.film.year}
                    country={film.film.countries}
                    duration={film.film.runtime}
                    reloadFilm={reloadFilm}
                    status={film.status} />
                <Info
                    style={padding}
                    directors={film.film.directors}
                    writers={film.film.writers}
                    actors={film.film.actors}
                    synopsis={film.film.plot} />
                <Watchers
                    style={padding}
                    type={'Seen'}
                    filmId={filmId}
                    filmTitle={film.film.title}
                    reloadFilm={reloadFilm}
                    loggedUser={loggedUser}
                    watchers={film.watchers_past} />
                <Watchers
                    style={padding}
                    type={'Currently watching'}
                    filmId={filmId}
                    loggedUser={loggedUser}
                    watchers={film.watchers_present} />
                <Watchers
                    style={padding}
                    type={'Watchlist'}
                    filmId={filmId}
                    loggedUser={loggedUser}
                    watchers={film.watchers_future} />
                <Thoughts
                    reloadFilm={reloadFilm}
                    style={padding}
                    filmId={filmId}
                    thoughts={film.comments}
                    status={film.status} />
                <ThoughtTextArea
                    reloadFilm={reloadFilm}
                    filmId={filmId}
                    style={{paddingHorizontal: 20}} />
            </ViewWrapper>
        </KeyboardAvoidingView>
    )
};

const s = StyleSheet.create({
    view: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        justifyContent: 'flex-end'
    }
});

export default Film;