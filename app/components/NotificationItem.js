import React from 'react';
import { View, Text, Dimensions, StyleSheet, Button } from 'react-native';

import UserRow from '../components/user/UserRow';
import Date from '../components/Date';

import { colours } from '../colours'

const NotificationItem = props => {
    const [actionText, setActionText] = React.useState();

    React.useEffect(() => {

        setAction();

    }, []);

    const setAction = () => {
        switch(props.type) {
            case 'q':
                setActionText('wants to be friends with you');
                break;
            case 'f':
                setActionText('and you are friends now')
                break;
            case 'd':
                setActionText('is not friends with you anymore')
                break;
            case 'c':
                setActionText('rejected your friend request')
                break;
        }
    }

    console.log(props.item)

    return (
        <View style={[s.container, props.style]}>
            <View style={s.card}>
                <View style={s.action}>
                    <UserRow
                        user={props.user}
                        size='large' />
                    <Text style={s.text}>{actionText}</Text>
                </View>
                {props.children}
                <Date
                    styles={{ paddingVertical: 10 }}
                    created={props.created} />
            </View>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: Dimensions.get('window').width  < 400 ? 15 : 30,
    },
    card: {
        paddingTop: 40,
        borderBottomWidth: 1,
        borderBottomColor: colours.blue4,
    },
    action: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'SourceSansPro-Regular',
        color: colours.black,
        fontSize: 17,
        margin: 10,
    }
});

export default NotificationItem;