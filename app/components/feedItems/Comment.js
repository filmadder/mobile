import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import ProfileFilmCard from '../../components/ProfileFilmCard';

import { colours } from '../../colours';

const Comment = props => {
    return (
        <View>
            <View style={styles.action}>
                <Text style={styles.username}>stelaseldano</Text>
                <Text style={styles.actionText}> shared some thoughts</Text>
            </View>
            <View style={styles.comment}>
                <Text>Thought, thought, thought ...</Text>
            </View>
            <ProfileFilmCard />
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
    comment: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        color: colours.black,
        fontSize: 16,
    }
});

export default Comment;