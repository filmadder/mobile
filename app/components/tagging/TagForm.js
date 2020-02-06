import React from 'react';
import { TextInput, Text, View, Modal, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';

import TagItem from '../../components/TagItem';
import IconButton from '../dom/IconButton';
import FaButton from '../dom/FaButton';

import ws from '../../ws';
import { colours } from '../../colours'

const TagForm = props => {
    const [newTag, setNewTag] = React.useState('');
    const [tags, setTags] = React.useState(props.tags || []);

    const removeTag = tag => {
        setTags(tags.filter(item => item !== tag));
    }

    const addTag = () => {
        if (tags.length >= 5) {
            console.warn('you can add up t 5 tags')
        } else if (tags.includes(newTag.trim().replace(' ', '-'))) {
            console.warn('this tag already exists')
        } else if (newTag.trim().length === 0) {
            setNewTag('')
        } else {
            setTags([...tags, newTag.trim().replace(' ', '-')])
            setNewTag('')
        }
    }

    const updateTags = () => {
        ws.send({
            id: 42,
            type: 'set_tags',
            film: props.filmId,
            tags: tags
        })
        .then(response => {
            if (response.type === 'confirm') {
                props.close()
            }
        })
        .catch(err => {
            console.warn(err)
        })
    }

    return (
        <Modal
        style={s.modal}
            visible={props.visible}
            animationType='slide'>
            <KeyboardAvoidingView behavior='padding'>
                <View style={s.card}>
                    {tags && (
                        <View style={s.currentTags}>
                            {tags.map(tag => (
                                <View
                                    key={tag}
                                    style={s.tagContainer}>
                                    <TagItem tagName={tag} style={s.tag} />
                                    <IconButton
                                        name='trash'
                                        size={18}
                                        onPress={() => removeTag(tag)}
                                    />
                                </View>
                            ))}
                            {tags.length === 0 && (
                                <View>
                                    <Text>You haven't added any tags for {props.filmTitle}</Text>
                                </View>
                            )}
                        </View>
                    )}
                    <View style={s.inputForm}>
                        <TextInput
                            style={s.input}
                            value={newTag}
                            placeholder='enter tag'
                            placeholderTextColor={colours.blue3}
                            onChangeText={text => setNewTag(text)}
                            onSubmitEditing={addTag}
                        />
                        <IconButton
                            style={{ padding: 10 }}
                            name='plus'
                            onPress={addTag} />
                    </View>
                    <FaButton title='done'
                        onPress={updateTags} />
                </View>
            </KeyboardAvoidingView>
        </Modal>

    )
};

const s = StyleSheet.create({
    inputForm: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
    },
    input: {
        flex: 2,
        borderColor: colours.blue3,
        color: colours.blue3,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
        fontFamily: 'SourceSansPro-Regular'
    },
    card: {
        padding: 30,
        height: '100%',
        justifyContent: 'center'
    },
    currentTags: {
        marginVertical: 10,
        justifyContent: 'flex-end',
        height: 200,
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tag: {
        marginVertical: 5,
        marginHorizontal: 10
    }
})

export default TagForm;