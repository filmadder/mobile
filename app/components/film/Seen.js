import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import UserRow from '../user/UserRow';
import TagItem from '../../components/TagItem';

import { colours } from '../../colours';
import { users } from '../../../data';

const Seen = props => {
    const tags = props.tags
        ?  props.tags.map((tag, index) => <TagItem style={s.tag} key={index} tagName={tag.tagName} tagTotal={tag.tagTotal} />)
        : null

    return (
        <View style={[s.container, props.style]}>
            <View style={s.header}>
                <Text style={s.title}>Seen</Text>
            </View>
            <View style={s.userContainer}>
                <UserRow
                    user={users['1']}
                    size='medium' />
                    {props.tags && <View style={s.tagsContainer}>{tags}</View>}
            </View>
            <View style={s.userContainer}>
                <UserRow
                    user={users['3']} />
            </View>
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

export default Seen;