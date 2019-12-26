import React from 'react';
import { View, Dimensions, TextInput, StyleSheet } from 'react-native';

import FaButton from '../dom/FaButton';

import { colours } from '../../colours';

const ThoughtTextArea = props => {
    const [thought, setThought] = React.useState('');

    return (
        <View style={[s.container, props.style]}>
            <View style={s.textareaContainer}>
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
        marginVertical: 30,
    },
    textareaContainer: {
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
});

export default ThoughtTextArea;