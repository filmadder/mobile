import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Avatar from './user/Avatar';
import Film from '../components/feedItems/Film';
import Friendship from '../components/feedItems/Friendship';
import Thought from '../components/feedItems/Thought';
import Tag from '../components/feedItems/Tag';

import { colours } from '../colours';

const FeedCard = props => {
    const type = props.item.type;
    let content = null

    switch (type) {
        case 't': 
            content = <Tag 
                    user={props.item['user']}
                    film={props.item['film']}
                    tags={props.item['tags']} />
            break;
        case 'f':
            content = <Friendship />
            break;
        case 'c':
            content = <Thought
                    comment={props.item.comment}
                    user={props.item['user']}
                    film={props.item['film']} />
            break;
        case 'a':
        case 'i':
        case 'o':
        case 'u':
            content = <Film
                    action={props.item['type']}
                    user={props.item['user']}
                    film={props.item['film']} />
            break;
        default:
            content = <View><Text>no such type of feed item</Text></View>
    }

    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.contents}>
                <Avatar
                    user={props.item.user}
                    style={styles.avatar} />
                    {content}
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
        elevation: 5,
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
        left: 20,
    },
})

export default FeedCard;