import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ViewTitle from '../components/ViewTitle';

const ViewWrapper = props => {
    const viewTitle = props.title
        ? <ViewTitle title={props.title} />
        : null;
    
    return (
        <ScrollView
            {...props}
            style={[s.container, props.style]}>
            {viewTitle}
            {props.children}
        </ScrollView>
    )
};

const s = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50
    }
});

export default ViewWrapper;