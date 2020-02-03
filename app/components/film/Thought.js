import React from 'react';
import { View, Alert, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import AvatarLink from '../../components/user/AvatarLink';
import UsernameLink from '../../components/user/UsernameLink';
import FaSmallButton from '../../components/dom/FaSmallButton';

import { colours } from '../../colours';

const Thought = props => {
    const [sameUser, setSameUser] = React.useState(false);

    React.useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user => {
                let thisUser = JSON.parse(user)
                if (thisUser.pk === props.user.pk.toString()) {
                    setSameUser(true)
                }
            })
            .catch(err => {
                console.warn(err)
            })
    }, [])

    const deleteComment = text => {
        Alert.alert(
            'Delete Comment',
            text,
            [
                {text: 'No', onPress: () => {}, style: 'cancel'},
                {text: 'Yes', onPress: () => props.deleteComment()},
            ],
            { cancelable: true }
          );
    };

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
            {sameUser && (
                <FaSmallButton
                    style={s.button}
                    title='delete'
                    onPress={() => deleteComment(props.text)} />
            )}
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