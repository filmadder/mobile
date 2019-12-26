import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ViewTitle from '../components/ViewTitle';
import NotificationItem from '../components/NotificationItem';
import FaButton from '../components/dom/FaButton';
import ViewWrapper from './ViewWrapper';

const Notifications = props => {
    return (
        <ViewWrapper
            title='Notifications'>
            <NotificationItem
                username='pavelsofroniev'
                text='send you a friend request'>
                <View style={s.buttonGroup}>
                    <FaButton title='accept' />
                    <FaButton title='decline' />
                </View>
            </NotificationItem>
            <NotificationItem
                username='stelailieva'
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