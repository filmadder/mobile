import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { colours } from '../colours';

import UserCard from '../components/user/UserCard';
import ProfileList from '../components/profile/ProfileList';
import ProfileFooter from '../components/profile/ProfileFooter';
import ViewWrapper from './ViewWrapper';

const User = props => {
    const [type, setType] = React.useState('watchlist');

    const film = (type === 'watchlist' || type === 'watched' || type === 'watching')
        ? true
        : false

    const footer = <ProfileFooter
            current='watchlist'
            total='25' />

    const onTypeSelected = type => {
        setType(type)
    };

    return (
        <View style={{ flex: 1 }}>
            <ViewWrapper>
                <UserCard />
                <ProfileList
                    type={type}
                    onTypeSelected={onTypeSelected}></ProfileList>
            </ViewWrapper>
            {film && footer}
        </View>
    )
};

export default User;