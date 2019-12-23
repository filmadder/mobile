import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableWithoutFeedback, Animated } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { colours } from '../colours';

const Error = props => {
    const aniVal = new Animated.Value(0);

    const animate = () => Animated.spring(
        aniVal,
        {
            toValue: 1,
        }
    ).start()

    React.useEffect(() => {
        animate()
    })

    const top = aniVal.interpolate({
        inputRange: [0, 1],
        outputRange: [-260, 0]
    })

    const error = <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
                style={{backgroundColor: 'red', height: 120, width: 120}}>
                    <Svg height="120" width="120">
                        <Circle cx="60" cy="60" r="59" stroke={colours.blue4} strokeWidth='1.5' fill="none" />
                        <Line x1="88.11" y1="88.11" x2="31.89" y2="31.89" stroke={colours.blue4} strokeWidth='1.5' fill="none" />
                        <Line x1="31.89" y1="88.11" x2="88.11" y2="31.89" stroke={colours.blue4} strokeWidth='1.5' fill="none" />
                    </Svg>
            </TouchableWithoutFeedback>
            <Text style={styles.oops}>Oops!</Text>
            <Text style={styles.errorText}>{props.errorText}</Text>
        </View>;

    return (
        <Animated.View style={{top, position: 'absolute'}}>
            <View style={styles.error}>
                {error}
            </View>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    error: {
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 0.5,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowColor: colours.black,
        shadowRadius: 2,
        shadowOpacity: 0.3,
        minWidth: 280,
    },
    closeBtn: {
        height: 120,
        width: 120,
        borderWidth: 1,
        borderColor: colours.blue3,
        borderRadius: 60
    },
    oops: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'android' ? 'Pacifico-Regular' : 'Pacifico',
        paddingVertical: 20,
        color: colours.blue4,
        fontSize: 24,
    },
    errorText: {
        fontFamily: 'SourceSansPro-Bold',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 16,
        color: colours.black,
        fontWeight: '600',
    },
});

export default Error;