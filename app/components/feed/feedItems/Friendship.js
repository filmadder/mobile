import React from 'react';
import { View, Text }  from 'react-native';

import UserCard from '../../../components/user/UserCard';
import Username from '../../../components/user/Username';

import { users } from '../../../../data'; 

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

export default Friendship;