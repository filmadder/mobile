import React from 'react';
import { TextInput, View, Modal, Button, StyleSheet } from 'react-native';

import TagItem from '../../components/TagItem';

import ws from '../../ws';

const TagForm = props => {
    const [newTag, setNewTag] = React.useState('');
    const [tags, setTags] = React.useState(props.tags || []);

    const removeTag = tag => {
        setTags(tags.filter(item => item !== tag));
    }

    const addTag = () => {
        if (newTag.trim()) {
            setTags(tags.concat(newTag.trim()))
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
            <View style={s.card}>
                {tags && (
                    <View style={s.currentTags}>
                        {tags.map(tag => (
                            <View
                                key={tag}
                                style={{ flexDirection: 'row' }}>
                                <TagItem tagName={tag} style={{ margin: 10 }} />
                                <Button title='remove' onPress={() => removeTag(tag)} />
                            </View>
                        ))}
                    </View>
                )}
                <TextInput
                    style={s.input}
                    value={newTag}
                    placeholder='enter tag'
                    onChangeText={text => setNewTag(text)}
                />
                <Button title='add'
                    onPress={addTag} />
                <Button title='done'
                    onPress={updateTags} />
            </View>
        </Modal>

    )
};

const s = StyleSheet.create({
    input: {
        width: '100%',
        padding: 10,
        fontSize: 20,
        fontFamily: 'SourceSansPro-Regular'
    },
    card: {
        padding: 30,
        height: '100%',
        justifyContent: 'center'
    },
    currentTags: {
        marginVertical: 30,
    }
})

export default TagForm;