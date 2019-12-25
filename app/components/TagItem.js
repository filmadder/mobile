import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../colours';

const TagItem = props => {
    
    let total = props.tagTotal
        ? <View style={styles.total}>
            <Text style={styles.tagTotal}>{props.tagTotal}</Text>
          </View>
        : null
    
    let rightRadius = !props.tagTotal
        ? {
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
        }
        : null

    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.tag, rightRadius]}>
                <Text style={styles.tagName}>{props.tagName}</Text>
            </View>
            {total}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 8,
        // paddingVertical: 4,
        // backgroundColor: colours.blue3,
        flexDirection: 'row',
    },
    tag: {
        backgroundColor: colours.blue3,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
    },
    total: {
        backgroundColor: colours.blue2,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    },
    tagName: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 13,
        color: 'white',
        textTransform: 'uppercase',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    tagTotal: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 13,
        color: 'white',
        textTransform: 'uppercase',
        paddingHorizontal: 8,
        paddingVertical: 4,
    }
});

export default TagItem;