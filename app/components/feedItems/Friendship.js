import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import ProfileHeader from '../../components/ProfileHeader';

import { colours } from '../../colours';

const Friendship = props => {
    return (
        <View>
            <View style={styles.action}>
                <Text style={styles.username}>stelaseldano</Text>
                <Text style={styles.actionText}> befriended someone</Text>
            </View>
            <ProfileHeader />
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

export default Friendship;