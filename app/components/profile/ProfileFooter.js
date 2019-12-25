import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';

import ProfileFooterClosed from './ProfileFooterClosed';
import ProfileFooterOpen from './ProfileFooterOpen';

const ProfileFilmFooter = props => {
    const [isOpen, setIsOpen] = React.useState(false);

    const content = !isOpen
        ? <ProfileFooterClosed
            total='25'
            current='watchlist' />
        : <ProfileFooterOpen
            total='25'
            current='watchlist' />

    return (
        <TouchableWithoutFeedback
            onPress={() => setIsOpen(!isOpen)}>
            <View>
                {content}
            </View>
        </TouchableWithoutFeedback>
    )
};

const s = StyleSheet.create({

});

export default ProfileFilmFooter;