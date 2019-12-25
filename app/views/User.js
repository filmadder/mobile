import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { colours } from '../colours';

import ProfileHeader from '../components/ProfileHeader';
import ProfileList from '../components/ProfileList';
import ProfileFooter from '../components/ProfileFooter';
import ViewWrapper from './ViewWrapper';

const User = props => {
    const [type, setType] = React.useState('watchlist');

    const film = (type === 'watchlist' || type === 'watched' || type === 'watching')
        ? true
        : false

    const footer = film
        ? <ProfileFooter
            current='watchlist'
            total='25' />
        : null

    const onTypeSelected = type => {
        setType(type)
    };

    return (
        <View style={{ flex: 1 }}>
            <ViewWrapper>
                <ProfileHeader></ProfileHeader>
                <ProfileList
                    type={type}
                    onTypeSelected={onTypeSelected}></ProfileList>
            </ViewWrapper>
            {footer}
        </View>
    )
};

export default User;