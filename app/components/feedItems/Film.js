import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../FilmCard';
import Username from '../../components/user/Username';

import { colours } from '../../colours';

const Film = props => {
    let action = null;

    console.log(props)

    if (props.action === 'a') {
        action = 'added to seen'
    } else if (props.action === 'u') {
        action = 'added to watchlist' 
    } else if (props.action === 'o') {
        action = 'moved from watchlist to seen'
    } else if (props.action === 'i') {
        action = 'is currently watching'
    } else {
        action = 'no such action'
    }

    return (
        <View>
            <View style={styles.action}>
                <Username
                    user={props.user}
                    navigation={props.navigation} />
                <Text style={styles.actionText}>{action}</Text>
            </View>
            <FilmCard
                film={props.film} />
        </View>
    )
};

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    username: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 17,
        color: colours.black
    },
    actionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 17,
    }
});

export default Film;