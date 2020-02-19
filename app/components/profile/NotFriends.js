import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FaButton from '../dom/FaButton';
import { colours } from '../../colours';
import ws from '../../ws';

const NotFriends = props => {
    let content = null;
    
    switch (props.status) {
        // unknown status
        case 'u':
            content = <View>                    
                    <Text
                        style={s.title}>You and {props.user.name} are not friends yet</Text>
                    <Text
                        style={s.text}>You will be able to see {props.user.name}'s once you become friends</Text>
                    <FaButton
                        onPress={() => makeRequest('request_friendship')}
                        title='befriend' />
                </View>
            break;
        // viewer requested friendship
        case 'v':
            content = <View>                    
                    <Text
                        style={s.title}>Friendship Request send</Text>
                    <Text
                        style={s.text}>You have asked {props.user.name} to become your frined</Text>
                    <FaButton
                        onPress={() => makeRequest('withdraw_friendship')}
                        title='widthdraw' />
                </View>
            break;
        // the user requested friendship from the viewer
        case 'r':
            content = <View>                    
                    <Text
                        style={s.title}>{props.user.name} wants to befriend you</Text>
                    <Text
                        style={s.text}>Once you become friends, {props.user.name} will be able to see your film and other lists</Text>
                    <FaButton
                        onPress={() => makeRequest('accept_friendship')}
                        title='accept' />
                    <FaButton
                        onPress={() => makeRequest('reject_friendship')}
                        title='decline' />
                </View>
            break;
    }

    const makeRequest = type => {
        ws.send({
            id: null,
            type: type,
            user: props.user.pk        
        })
        .then(response => {
            if (response.type === 'confirm') {
                props.reload();
            } else {
                console.warn(response)
            }
        })
        .catch(err => console.warn(err))
    }

    return (
        <View style={s.container}>
            {content}
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: colours.blue3,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: 'Pacifico-Regular',
        color: colours.blue4,
        fontSize: 20,
        paddingTop: 40,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'SourceSansPro-Regular',
        marginVertical: 22,
        textAlign: 'center'
    }

})

export default NotFriends;