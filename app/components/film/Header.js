import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { colours } from '../../colours';

const Header = props => {
    return (
        <ImageBackground
            style={s.poster}
            source={{uri: props.poster}}
            resizeMode='cover'>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.2)', colours.blue5]}
                locations={[0, 0.85]}
                style={s.overlay}>
                <View style={[s.infoContainer, props.style]}>
                    <View style={s.infoLeft}>
                        <Text style={s.title}>{props.title}</Text>
                        <Text style={s.type}>{props.type} | {props.year}</Text>
                        <Text style={s.country}>{props.country}</Text>
                        <Text style={s.duration}>{props.duration}</Text>
                    </View>
                    <View style={s.infoRight}>
                        <Text style={s.status}>{props.status}</Text>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
};

const s = StyleSheet.create({
    poster: {
        height: 600,
        width: '100%',
    },
    overlay: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30,
    },
    infoLeft: {
        paddingRight: 30,
    },
    title: {
        color: 'white',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 32,
    },
    type: {
        color: 'white',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        textTransform: 'uppercase',
        marginTop: 10,
    },
    country: {
        color: 'white',
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 18,
        marginTop: 15,
    },
    duration: {
        color: 'white',
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 18,
    },
    infoRight: {

    },
    status: {
        color: 'white',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 22,
    }
});

export default Header;