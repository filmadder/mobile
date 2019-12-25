import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserRow from '../user/UserRow';
import TagItem from '../../components/TagItem';
import { colours } from '../../colours';

const Watchlist = props => {
    const tags = props.tags
        ?  props.tags.map((tag, index) => <TagItem style={s.tag} key={index} tagName={tag.tagName} tagTotal={tag.tagTotal} />)
        : null

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.title}>Watchlist</Text>
            </View>
            <View style={s.usersContainer}>
                <UserRow
                    style={{ paddingHorizontal: 10 }}
                    username={'ivan'} />
                <UserRow
                    style={{ paddingHorizontal: 10 }}
                    username={'blagoi'} />
                <UserRow
                    style={{ paddingHorizontal: 10 }}
                    username={'stefan'} />
            </View>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        padding: 30,
    },
    title: {
        paddingBottom: 5,
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
        color: colours.blue3,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: colours.blue3,
        marginBottom: 15,
    },
    usersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Watchlist;