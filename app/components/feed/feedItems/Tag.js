import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../../FilmCard';
import TagItem from '../../../components/TagItem';
import FeedCardHeader from '../FeedCardHeader';

import { colours } from '../../../colours';

const Tag = props => {
    const tags = props.tags.map(tag =>
        <TagItem
            // hacky unique key
            key={props.film.key + 'tag'}
            style={styles.tag}
            tagName={tag}
            tagTotal='4' />
    );

    return (
        <View>
            <FeedCardHeader 
                user={props.user}
                navigation={props.navigation}
                action={action} />

            <View style={styles.tags}>
                {tags}
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
    },
    tags: {
        flexDirection: 'row',
        paddingVertical: 15,
        color: colours.black,
        fontSize: 16,
    },
    tag: {
        marginRight: 10,
    }
});

export default Tag;