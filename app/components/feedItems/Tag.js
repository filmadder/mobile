import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../FilmCard';
import TagItem from '../../components/TagItem';

import { colours } from '../../colours';

const Tag = props => {
    return (
        <View>
            <View style={styles.action}>
                <Text style={styles.username}>stelaseldano</Text>
                <Text style={styles.actionText}> added tags</Text>
            </View>
            <View style={styles.tags}>
                <TagItem
                    style={styles.tag}
                    tagName='very bad'
                    tagTotal='4' />
                <TagItem
                    style={styles.tag}
                    tagName='favourite'
                    tagTotal='35' />
            </View>
            <FilmCard />
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