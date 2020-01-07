import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Username from './user/Username';

const FeedCardHeader = props => {
    return (
        <View style={s.action}>
            <Username
                user={props.user}
                navigation={props.navigation} />
            <Text style={s.actionText}>{props.action}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    actionText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 17,
    }
})

export default FeedCardHeader;