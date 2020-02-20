import React from 'react';
import { View }  from 'react-native';
import { withNavigation } from 'react-navigation';

import UserCard from '../../../components/user/UserCard';
import FeedCardHeader from '../FeedCardHeader';

const Friendship = props => {

    return (
        <View>
            <FeedCardHeader 
                user={props.userA}
                navigation={props.navigation}
                action={' befriended'} />

            <UserCard
                navigation={props.navigation}
                style={{ backgroundColor: 'transparent' }}
                user={props.userB}
                size='large' />
        </View>
    )
};

export default withNavigation(Friendship);