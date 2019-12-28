import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ViewTitle from '../components/ViewTitle';
import NotificationItem from '../components/NotificationItem';
import FaButton from '../components/dom/FaButton';
import ViewWrapper from './ViewWrapper';
import { users } from '../../data';

const Notifications = props => {
    return (
        <ViewWrapper
            title='Notifications'>
            <NotificationItem
                user={users['2']}
                text='send you a friend request'>
                <View style={s.buttonGroup}>
                    <FaButton title='accept' />
                    <FaButton title='decline' />
                </View>
            </NotificationItem>
            <NotificationItem
                user={users['3']}
                text='accepted your friend request'>
            </NotificationItem>
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    buttonGroup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});

export default Notifications;