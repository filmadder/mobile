import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../../FilmCard';
import FeedCardHeader from '../FeedCardHeader';

import { colours } from '../../../colours';

const Thought = props => {

    return (
        <View>
            <FeedCardHeader 
                user={props.user}
                navigation={props.navigation}
                action={' shared some thoughts'} />

            <View style={styles.comment}>
                <Text>{props.comment.text}</Text>
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
        fontSize: 17,
        fontFamily: 'SourceSansPro-Regular',
    }
});

export default Thought;