import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Username from '../user/Username';
import { colours } from '../../colours';

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
        color: colours.black,
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        marginTop: 3,
    }
})

export default FeedCardHeader;