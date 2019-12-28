import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import FilmCard from '../FilmCard';
import Username from '../../components/user/Username';

import { colours } from '../../colours';

const Film = props => {
    return (
        <View>
            <View style={styles.action}>
                <Username
                    user={props.user}
                    navigation={props.navigation} />
                <Text style={styles.actionText}> added to watching</Text>
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
    }
});

export default Film;