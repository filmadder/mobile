import React from 'react';
import { StyleSheet, FlatList, View, ScrollView, Text } from 'react-native';
import Avatar from './Avatar';
import { colours } from '../colours';

const FeedCard = props => {
    return (
        <View style={styles.container}>
            <View style={styles.contents}>
                <Avatar style={styles.avatar}/>
                {props.children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 0,
        marginVertical: 50,
    },
    contents: {
        backgroundColor: colours.blue0,
        borderRadius: 10,
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 10,
        elevation: 3,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowColor: colours.black,
        shadowRadius: 2,
        shadowOpacity: 0.3,
    },
    avatar: {
        position: 'absolute',
        top: -40,
        left: 10,
    },
})

export default FeedCard;