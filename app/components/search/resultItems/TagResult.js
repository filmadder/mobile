import React from 'react';
import { View, StyleSheet } from 'react-native';

import TagItem from '../../TagItem';
import UserRow from '../../UserRow';

const TagResult = props => {
    let users = props.users.map(user => <UserRow size={'small'} username={user.username} />);

    return (
        <View style={s.container}>
            <TagItem tagName={props.tag.name} />
            <View style={s.usersContainer}>
                {users}
            </View>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    usersContainer: {
        padding: 20,
    }
})

export default TagResult;