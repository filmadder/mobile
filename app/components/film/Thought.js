import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AvatarLink from '../../components/user/AvatarLink';
import UsernameLink from '../../components/user/UsernameLink';
import FaSmallButton from '../../components/dom/FaSmallButton';

import { colours } from '../../colours';
import { users } from '../../../data';

const Thought = props => {

    return (
        <View style={s.container}>
            <AvatarLink
                style={s.avatar}
                size='medium'
                user={props.user} />
            <View style={s.header}>
                <UsernameLink
                    size='small'
                    user={props.user} />
                <Text style={s.date}>{props.date}</Text>
            </View>
            <View style={s.textContainer}>
                <Text style={s.text}>{props.text}</Text>
            </View>
            <FaSmallButton
                style={s.button}
                title='reply' />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        paddingTop: 10,
        borderWidth: 1,
        borderColor: colours.blue3,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
    },
    avatar: {
        position: 'absolute',
        top: -10,
        left: -10,
        margin: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colours.blue3,
        paddingHorizontal: 15,
    },
    date: {
        fontFamily: 'SourceSansPro-Regular',
        color: colours.blue3,
        fontSize: 15,
    },
    textContainer: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    text: {
        color: colours.black,
        fontSize: 15,
        lineHeight: 18,
    },
    button: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: -10,
        right: 10
    }
});

export default Thought;