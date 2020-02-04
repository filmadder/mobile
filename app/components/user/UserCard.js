import React from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import Avatar from './Avatar'
import Username from './Username'

import ws from '../../ws';
import { colours } from '../../colours';

const UserCard = props => {

    const goToProfile = () => {

        if (!props.longPress) {
            props.navigation.navigate('Profile', { 'user': props.user.pk })
        }
    };

    const handleLongPress = () => {
        if (props.longPress) {
            Alert.alert(
                'Delete Friend',
                `remove ${props.user.name} from friends`,
                [
                    {text: 'No', style: 'cancel'},
                    {text: 'Yes', onPress: () => dropFriendship()},
                ],
                { cancelable: true }
              );
        }
    };

    const dropFriendship = () => {
        ws.send({
            id: null,
            type: "drop_friendship",
            user: props.user.pk
        })
        .then(response => {
            if (response.type === 'confirm') {
                props.reload();
            }
        })
    }

    return (
        <TouchableOpacity
            style={[styles.container, props.style]}
            onPress={goToProfile}
            onLongPress={handleLongPress}>
            <View style={styles.containerInner}>
                <Avatar
                    style={{ marginRight: 0 }}
                    size={props.size}
                    avatar={props.user.avatar_url} />
                <Username
                    style={styles.username}
                    name={props.user.name}
                    size={props.size}
                    navigation={props.navigation} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    containerInner: {
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 20,
    },
    username: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 22,
        color: colours.black,
        marginTop: 20,
    }
});

export default UserCard;