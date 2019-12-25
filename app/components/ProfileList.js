import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import FilmCard from './FilmCard';
import UserResult from './search/resultItems/UserResult';
import ListFilterDropdown from './ListFilterDropdown';
import TagItem from './TagItem';

import { colours } from '../colours';

const ProfileFilmList = props => {
    let content = null;

    switch (props.type) {
        case 'friends':
            content = <View style={[styles.content]}>
                <UserResult username='stela' />
                <UserResult username='pavelsof' />
                <UserResult username='стефан' />
                <UserResult username='userewithareallylongusername' />
            </View>
            break;
        case 'tags':
            content = <View style={[styles.content, styles.tagList]}>
                <TagItem
                    style={styles.tag}
                    tagName='3 hamsters'
                    tagTotal='40' />
                <TagItem
                    style={styles.tag}
                    tagName='5 hamsters'
                    tagTotal='1' />
                <TagItem
                    style={styles.tag}
                    tagName='1 hamster'
                    tagTotal='10' />
            </View>
            break;
        default:
            content = <View style={[styles.content]}>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
                <FilmCard style={styles.card}/>
            </View>
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            stickyHeaderIndices={[0]}
            onScroll={(ev) => {console.log(ev.nativeEvent.contentOffset)}}
            scrollEventThrottle='500'>
            <ListFilterDropdown
                style={styles.dropdown}
                onTypeSelected={props.onTypeSelected} />
            {content}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colours.blue4
    },
    content: {
        width: '100%',
        paddingVertical: 100
    },
    dropdown: {
        position: 'absolute',
        top: 0,
    },
    card: {
        marginVertical: 10,
    },
    tagList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        marginVertical: 8,
        marginRight: 16,
    }
});

export default ProfileFilmList;