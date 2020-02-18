import React from 'react';
import { View, StyleSheet } from 'react-native';
import jdenticon from 'jdenticon';
import { SvgXml } from 'react-native-svg';
import { colours } from '../../colours';

const JdentIcon = props => {
    const svg = jdenticon.toSvg(props.value, props.size - props.size / 6, {
        lightness: {
            color: [0.1, 0.9],
            grayscale: [0.1, 0.9]
        },
        padding: 0.9,
    });
    
    const config = {
        height: props.size,
        width: props.size,
        borderRadius: props.size / 2,
    }

    return (
        <View
            style={[styles.container, config]}>
            <SvgXml xml={svg} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 9,
        shadowOffset: {
            height: 5,
            width: 0,
        },
        shadowColor: colours.black,
        shadowRadius: 2,
        shadowOpacity: 0.3,
    }
})

export default JdentIcon;
