import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserRow from '../user/UserRow';
import TagItem from '../../components/TagItem';
import { colours } from '../../colours';

const Seen = props => {
    const tags = props.tags
        ?  props.tags.map((tag, index) => <TagItem style={s.tag} key={index} tagName={tag.tagName} tagTotal={tag.tagTotal} />)
        : null

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.title}>Seen</Text>
            </View>
            <View style={s.userContainer}>
                <UserRow
                    username={'ivan'} />
                <View style={s.tagsContainer}>
                    {tags}
                </View>
            </View>
            <View style={s.userContainer}>
                <UserRow
                    username={'kostadin'} />
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
})

export default Seen;