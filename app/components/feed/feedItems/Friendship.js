import React from 'react';
import {View} from 'react-native';

import UserCard from '../../../components/user/UserCard';
import FeedCardHeader from '../FeedCardHeader';

const Friendship = props => {
  return (
    <View>
      <FeedCardHeader user={props.userA} action={' befriended'} />

      <UserCard
        style={{backgroundColor: 'transparent'}}
        user={props.userB}
        size="large"
      />
    </View>
  );
};

export default Friendship;
