import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Avatar from '../../components/user/Avatar';
import Username from '../../components/user/Username';
import FaSmallButton from '../../components/dom/FaSmallButton';

import { colours } from '../../colours';
import { users } from '../../../data';

const Thought = props => {
    console.log(props.user)
    return (
        <View style={s.container}>
            <Avatar
                style={s.avatar}
                user={props.user} />
            <View style={s.header}>
                <Username
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
        height: 30,
        width: 30,
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