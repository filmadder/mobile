import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import PlaceholderPoster from './PlaceholderPoster';

import { colours } from '../colours';

const FilmCard = props => {

    const handleCardPress = () => {
        props.navigation.push('Film', { filmId: props.film.pk });
    }
    
    // if (Object.entries(films).length === 0) {
    //     return <Text>loader</Text>;
    // }

    const placeholderPoster = <PlaceholderPoster />;
    const poster = <Image source={{uri: props.film.poster_url}} style={s.poster}/>

    return (
        <TouchableOpacity
            style={[s.card, props.style]}
            onPress={handleCardPress}>
            {props.film.poster_url ? poster : placeholderPoster}
            <View style={s.titleContainer}>
                <Text style={s.title}>{props.film.title}</Text>
            </View>
        </TouchableOpacity>
    )
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
    titleContainer: {
        flex: 1,
    },
    title: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 24,
        color: colours.black,
        marginBottom: 7,
        flex: 1,
        flexWrap: 'wrap',
    },
    director: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
        color: colours.black,
        textTransform: 'uppercase',
        marginBottom: 4,
    },
    genre: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 14,
        color: colours.black
    }
});

export default withNavigation(FilmCard);