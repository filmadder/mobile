import React from 'react';
import { View, Dimensions, TextInput, StyleSheet } from 'react-native';

import { colours } from '../../colours';
import FaButton from '../dom/FaButton';

const ThoughtTextArea = props => {
    const [thought, setThought] = React.useState('');

    return (
        <View style={s.container}>
            <View style={s.inputContainer}>
                <TextInput
                    style={s.textarea}
                    value={thought}
                    placeholder='share your thoughts'
                    onChangeText={text => setThought(text)}
                    multiline={true}
                    numberOfLines={5}></TextInput>
            </View>
            <FaButton
                title='post'
                onPress={() => {}}></FaButton>
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        margin: 20,
        marginBottom: 45,
    },
    inputContainer: {
        backgroundColor: 'white',
        borderColor: colours.blue4,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    textarea: {
        height: 120,
        fontSize: 15,
        lineHeight: 15,
    }
})

export default ThoughtTextArea;