import React from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { colours } from '../colours';

import ProfileHeader from '../components/ProfileHeader';
import ProfileFilmList from '../components/ProfileFilmList';
import ListFilterDropdown from '../components/ListFilterDropdown'

const User = props => {
    return (
        <SafeAreaView>
            <ProfileHeader></ProfileHeader>
            <ProfileFilmList></ProfileFilmList>
        </SafeAreaView>
    )
};

export default User;