import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';

import UserCard from '../../components/user/UserCard';
import Username from '../../components/user/Username';

import { colours } from '../../colours';

import { users } from '../../../data'; 

const Friendship = props => {
    return (
        <View>
            <View style={styles.action}>
                <Username
                    user={props.user} />
                <Text style={styles.actionText}> befriended someone</Text>
            </View>
            <UserCard
                style={{ backgroundColor: 'transparent' }}
                user={users['3']} />
        </View>
    )
};

const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    username: {
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 17,
        color: colours.black
    },
    actionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 17,
    }
});

export default Friendship;