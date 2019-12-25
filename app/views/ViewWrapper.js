import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ViewTitle from '../components/ViewTitle';

const ViewWrapper = props => {
    const viewTitle = props.title
        ? <ViewTitle title={props.title} />
        : null;
    
    return (
        <View style={s.view}>
            <ScrollView
                style={{paddingHorizontal: 30, paddingVertical: 50}}>
                {viewTitle}
                {props.children}
            </ScrollView>
        </View>
    )
};

const s = StyleSheet.create({
    view: {
        flex: 1,
    },
});

export default ViewWrapper;