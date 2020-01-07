import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../FilmCard';
import FeedCardHeader from '../FeedCardHeader';

import { colours } from '../../colours';

const Thought = props => {

    return (
        <View>
            <FeedCardHeader 
                user={props.user}
                navigation={props.navigation}
                action={' shared some thoughts'} />

            <View style={styles.comment}>
                <Text>comment id because this is what we have for now {props.comment.pk}</Text>
            </View>

            <FilmCard
                film={props.film} />
        </View>
    )
};

const styles = StyleSheet.create({
    comment: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        color: colours.black,
        fontSize: 16,
    }
});

export default Thought;