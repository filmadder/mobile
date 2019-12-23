import React from 'react';
import { StyleSheet, FlatList, View, ScrollView } from 'react-native';

import ProfileFilmCard from './ProfileFilmCard';
import ListFilterDropdown from './ListFilterDropdown';

import { colours } from '../colours';

const ProfileFilmList = props => {

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            stickyHeaderIndices={[0]}
            onScroll={(ev) => {console.log(ev.nativeEvent.contentOffset)}}
            scrollEventThrottle='500'>
            <ListFilterDropdown />
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
            <ProfileFilmCard style={styles.card}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 200,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colours.blue4
    },
    card: {
        marginVertical: 10,
    }
});

export default ProfileFilmList;