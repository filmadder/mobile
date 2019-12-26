import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../colours';

const TagItem = props => {
    
    let total = <View style={styles.total}>
            <Text style={styles.tagTotal}>{props.tagTotal}</Text>
          </View>
    
    return (
        <View style={[styles.container, props.style]}>
            <View style={[styles.tag, props.tagTotal && styles.tagRightRadius]}>
                <Text style={styles.tagName}>{props.tagName}</Text>
            </View>
            {props.tagTotal && total}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tag: {
        backgroundColor: colours.blue3,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
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
    },
    tagRightRadius: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    }
});

export default TagItem;