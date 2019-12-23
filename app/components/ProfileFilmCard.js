import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colours } from '../colours';

const ProfileFilmCard = props => {
    return (
        <View style={[styles.card, props.style]}>
            <Image
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg'}}
                style={styles.poster}/>
            <View>
                <Text style={styles.title}>The Martian</Text>
                <Text style={styles.director}>Radley Scott</Text>
                <Text style={styles.genre}>film | 2015</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
    },
    poster: {
        height: 170,
        width: 125,
        borderRadius: 5,
        marginRight: 15,
    },
    title: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 24,
        color: colours.black,
        marginBottom: 7,
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

export default ProfileFilmCard;