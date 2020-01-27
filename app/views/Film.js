import React from 'react';
import { Text, StyleSheet } from 'react-native';

import ViewWrapper from './ViewWrapper';
import Header from '../components/film/Header';
import Info from '../components/film/Info';
import Watchers from '../components/film/Watchers';
import Thoughts from '../components/film/Thoughts';
import ThoughtTextArea from '../components/film/ThoughtTextArea';

import { screen } from '../constants/device';
import ws from '../ws';

const Film = props => {
    const filmId = props.navigation.getParam('filmId');
    const [film, setFilm] = React.useState({});
    const padding = screen.width < 400
        ? { padding: 20 }
        : { padding: 30 };

    React.useEffect(() => {

        isSubscribed = true;

        ws.send({
            type: "get_film",
            film: filmId,
            id: null
        })
        .then(data => (isSubscribed) ? setFilm(data) : {})
        .catch(err => (isSubscribed) ? console.warn(err) : null)

        return () => (isSubscribed = false);
    })

    if (Object.entries(film).length === 0) {
        return (<ViewWrapper>
                    <Text>loader</Text>
                </ViewWrapper>)
    }

    return (
        <ViewWrapper
            style={s.view}>
            <Header
                style={padding}
                poster={film.film.poster_url}
                title={film.film.title}
                type={film.film.omdb_type}
                year={film.film.year}
                country={film.film.countries}
                duration={film.film.runtime}
                status={'seen'} />
            <Info
                style={padding}
                directors={film.film.directors}
                writers={film.film.writers}
                actors={film.film.actors}
                synopsis={film.film.plot} />
            <Watchers
                style={padding}
                type={'Seen'}
                watchers={film.watchers_past} />
            <Watchers
                style={padding}
                type={'Currently Watching'}
                watchers={film.watchers_present} />
            <Watchers
                style={padding}
                type={'Watchlist'}
                watchers={film.watchers_future} />
            <Thoughts
                style={padding}
                thoughts={film.comments} />
            <ThoughtTextArea style={{paddingHorizontal: 20}} />
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    view: {
        paddingHorizontal: 0,
        paddingVertical: 0
    }
});

export default Film;