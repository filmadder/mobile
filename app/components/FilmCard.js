import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import { colours } from '../colours';

const FilmCard = props => {

    return (
        <TouchableOpacity
            style={[s.card, props.style]}
            onPress={() => props.navigation.navigate('Film')}>
            <Image
                source={{uri: props.film.poster_url}}
                style={s.poster}/>
            <View style={s.titleContainer}>
                <Text style={s.title}>{props.film.title}</Text>
                {/* <Text style={styles.director}>Radley Scott</Text>
                <Text style={styles.genre}>film | 2015</Text> */}
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