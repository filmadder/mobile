import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ViewTitle from '../components/ViewTitle';
import NotificationItem from '../components/NotificationItem';
import FaButton from '../components/dom/FaButton';

const Notifications = props => {
    return (
        <View style={s.view}>
            <ScrollView>
                <ViewTitle title='Notifications' />
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
            </ScrollView>
        </View>
    )
};

const s = StyleSheet.create({
    view: {
        flex: 1,
    },
    buttonGroup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});

export default Notifications;