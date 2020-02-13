import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colours } from '../../colours';

const Input = React.forwardRef((props, ref) => {
    const [focused, setFocused] = React.useState(false);

    React.useEffect(() => {
        props.setFocused(focused)
    }, [focused])

    return (
        <View style={[styles.inputContainer, props.style]}>
            <Text style={[styles.label, focused && styles.labelFocused]}>{props.label}</Text>
            <TextInput
                {...props}
                ref={ref}
                style={styles.input}
                secureTextEntry={props.textContentType === 'password' ? true : false}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}></TextInput>
        </View>
    )
});

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        paddingVertical: 10,
    },
    label: {
        fontFamily: 'SourceSansPro-Bold',
        color: colours.blue0,
        textTransform: 'uppercase',
        fontSize: 15,
    },  
    labelFocused: {
        color: 'white',
    },
    input: {
        borderBottomWidth: 2,
        fontFamily: 'SourceSansPro-Regular',
        borderBottomColor: colours.blue0,
        paddingVertical: 10,
        fontSize: 20,
        marginVertical: 5,
        color: 'white'
    },
    inputFocused: {
        color: 'white',
    }
});

export default Input;
