import React from 'react';
import { View }  from 'react-native';

import FilmCard from '../../FilmCard';
import FeedCardHeader from '../FeedCardHeader';

const Film = props => {
    let action = null;

    switch (props.type) {
        case 'a':
            action = ' added to seen';
            break;
        case 'u':
            action = ' added to watchlist';
            break;
        case 'o':
            action = ' moved from watchlist to seen';
            break;
        case 'i':
            action = ' is currently watching';
            break;
        default:
            action = ' no such action'
    }

    return (
        <View>
            <FeedCardHeader 
                user={props.user}
                navigation={props.navigation}
                action={action} />
    
            <FilmCard
                film={props.film} />
        </View>
    )
};

export default Film;