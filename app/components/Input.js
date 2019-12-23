import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colours } from '../colours';

const Input = props => {
    const [focused, setFocused] = React.useState(false);

    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, focused ? styles.labelFocused : '']}>{props.label}</Text>
            <TextInput
                {...props}
                style={styles.input}
                secureTextEntry={props.textContentType === 'password' ? true : false}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}></TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginVertical: 10,
    },
    label: {
        color: colours.blue0,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 14,
    },  
    labelFocused: {
        color: 'white',
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: colours.blue0,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: 5,
        color: 'white'
    },
    inputFocused: {
        color: 'white',
    }
});

export default Input;
