import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import FaButton from '../dom/FaButton';
import CheckboxField from '../CheckboxField';

import { colours } from '../../colours';
import ws from '../../ws';

const ThoughtTextArea = props => {
    const [thought, setThought] = React.useState('');
    const [hasSpoilers, setHasSpoilers] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState('');

    const postComment = () => {
        ws.send({
            id: null,
            type: "post_comment",
            film: props.filmId,
            text: thought,
            has_spoilers: hasSpoilers
        })
        .then(response => {
            if (response.type === 'confirm') {

                setThought('');
                setHasSpoilers(false)

                props.reloadFilm();
            } else {
                console.log(response.message)
                setHasError(true)
                setError(response.message)
            }
        })
        .catch(err => {
            setHasError(true)
            setError(err)
        })
    }

    const errorMessage = <View>
        <Text>{error}</Text>
    </View>

    return (
        <View style={[s.container, props.style]}>
            {hasError && errorMessage}
            <View style={s.textareaContainer}>
                <TextInput
                    style={s.textarea}
                    value={thought}
                    placeholder='share your thoughts'
                    onChangeText={text => setThought(text)}
                    multiline={true}
                    onFocus={() => setHasError(false)}
                    numberOfLines={5}></TextInput>
            </View>
            <CheckboxField
                    style={s.checkbox}
                    text='this has spoilers'
                    checked={hasSpoilers}
                    onCheckboxChange={() => setHasSpoilers(!hasSpoilers)} />
            <FaButton
                title='post'
                onPress={postComment}></FaButton>
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
    checkbox: {
        justifyContent: 'flex-end'
    },
    textarea: {
        height: 120,
        fontSize: 15,
        lineHeight: 15,
    }
});

export default ThoughtTextArea;