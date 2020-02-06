import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import { colours } from '../colours';
import ws from '../ws';

const TagItem = props => {
    const [tagTotal, setTagTotal] = React.useState(props.tagTotal)
    
    let total = <View style={styles.total}>
            <Text style={styles.tagTotal}>{tagTotal}</Text>
          </View>
    
    const getTag = () => {
        ws.send({
            id: null,
            type: "get_tag",
            tag: props.tagName
        })
        .then(response => {
            props.navigation.push('Tag', { data: response });
        })
        .catch(err => (console.warn(err)))
    }

    return (
        <TouchableOpacity
            style={[styles.container, props.style]}
            onPress={getTag}>
            <View style={[styles.tag, props.tagTotal && styles.tagRightRadius]}>
                <Text style={styles.tagName}>{props.tagName}</Text>
            </View>
            {tagTotal && total}
        </TouchableOpacity>
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

export default withNavigation(TagItem);