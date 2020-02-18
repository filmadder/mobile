import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const Input = React.forwardRef((props, ref) => {
    const [focused, setFocused] = React.useState(false);
    const [isDark] = React.useState(props.dark);

    const setFocus = isFocused => {
        props.setFocused(isFocused);
        setFocused(isFocused);
    }

    const labelStyles = {
        color: isDark ? colours.blue3 : colours.blue0,
    };

    const labelFocusedStyled = {
        color: isDark ? colours.blue4 : 'white',
    };

    const inputStyles = {
        borderBottomColor: isDark ? colours.blue3 : colours.blue0,
        color: isDark ? colours.blue3 : colours.blue0,
    };

    const inputFocusedStyles = {
        borderBottomColor: isDark ? colours.blue4 : 'white',
        color: isDark ? colours.blue4 : 'white',
    };

    return (
        <View style={[styles.inputContainer, props.style]}>
            <Text style={[styles.label, focused ? labelFocusedStyled : labelStyles]}>{props.label}</Text>
            <TextInput
                {...props}
                ref={ref}
                style={[styles.input, focused ? inputFocusedStyles : inputStyles]}
                secureTextEntry={props.textContentType === 'password' ? true : false}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}></TextInput>
        </View>
    )
});

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        paddingVertical: 10,
    },
    input: {
        borderBottomWidth: 2,
        fontFamily: 'SourceSansPro-Regular',
        paddingVertical: 10,
        fontSize: 20,
        marginVertical: 5,
    },
    label: {
        fontFamily: 'SourceSansPro-Bold',
        textTransform: 'uppercase',
        fontSize: 15,

    }
});

export default Input;
