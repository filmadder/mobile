import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserRow from '../user/UserRow';
import TagItem from '../../components/TagItem';

import { colours } from '../../colours';

const Watchers = props => {

    let watchers = props.watchers.map(watcher => {
        let user = {
            name: watcher.name,
            avatar: watcher.avatar
        }
        
        let tags = watcher.tags && watcher.tags.map((tag, index) => (
            <TagItem
                key={index}
                style={{margin: 5}}
                tagName={tag} />
        ))

        return (
            <View style={s.userContainer}>
                <UserRow
                    key={watcher.pk}
                    user={user}
                    size='medium' />
                    {watcher.tags && <View style={s.tagsContainer}>{tags}</View>}
            </View>
        )
    })

    return (
        <View style={[s.container, props.style]}>
            <View style={s.header}>
                <Text style={s.title}>{props.type}</Text>
            </View>
            {watchers.length > 0 ? watchers : <Text>none of your friends</Text>}
        </View>
    )

};

const s = StyleSheet.create({
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
    userContainer: {
        marginVertical: 10,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 35,
    },
    tag: {
        marginRight: 16,
        marginVertical: 8,
    }
});

export default Watchers;