import React from 'react';
import { Dimensions, StyleSheet, ScrollView } from 'react-native';

import ViewTitle from '../components/ViewTitle';

const ViewWrapper = props => {
    const viewTitle = <ViewTitle title={props.title} />
    
    return (
        <ScrollView
            style={[s.container, props.style]}
            bounces='false'
            {...props}>
            {props.title && viewTitle}
            {props.children}
        </ScrollView>
    )
};

const s = StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.get('window').width  < 400 ? 15 : 30,
        paddingVertical: 50
    }
});

export default ViewWrapper;