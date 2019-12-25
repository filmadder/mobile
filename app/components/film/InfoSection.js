import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colours } from '../../colours';
import Svg, { Path } from 'react-native-svg';

const InfoSection = props => {
    const synopsis = props.synopsis
        ? {
            fontFamily: 'SourceSansPro-Regular'
        }
        : null
    
    const hideIcon = props.synopsis
        ? <Svg width="26" height="17" viewBox="0 0 26 17" fill="none" style={{ marginLeft: 10 }}>
            <Path d="M3.65732 16.636L20.6573 0.635986M25 8.50009C25 8.50009 19.6274 14.0001 13 14.0001C6.37258 14.0001 1 8.50009 1 8.50009C1 8.50009 6.37258 3.00009 13 3.00009C19.6274 3.00009 25 8.50009 25 8.50009ZM17 8.00009C17 10.2092 15.2091 12.0001 13 12.0001C10.7909 12.0001 9 10.2092 9 8.00009C9 5.79095 10.7909 4.00009 13 4.00009C15.2091 4.00009 17 5.79095 17 8.00009Z" stroke="#7BA4F4" />
        </Svg>
        : null

    return (
        <View style={s.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={s.title}>{props.title}</Text>
                {hideIcon}
            </View>
            <Text style={[s.text, synopsis]}>{props.text} </Text>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    title: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 16,
        textTransform: 'uppercase',
        color: colours.blue4,
        marginBottom: 3,
    },
    text: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 17,
        color: colours.black
    }
});

export default InfoSection;