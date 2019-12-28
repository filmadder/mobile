import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../FilmCard';
import Username from '../../components/user/Username';

import { colours } from '../../colours';

const Thought = props => {
    return (
        <View>
            <View style={styles.action}>
                <Username
                    user={props.user} />
                <Text style={styles.actionText}> shared some thoughts</Text>
            </View>
            <View style={styles.comment}>
                <Text>Thought, thought, thought ...</Text>
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
    comment: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        color: colours.black,
        fontSize: 16,
    }
});

export default Thought;