import React from 'react';
import {
  TextInput,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import TagItem from '../../components/TagItem';
import IconButton from '../dom/IconButton';
import FaButton from '../dom/FaButton';
import ws from '../../ws';
import {useTheme} from '../../theme/hooks';

const TagForm = props => {
  const {colors} = useTheme();
  const [newTag, setNewTag] = React.useState('');
  const [tags, setTags] = React.useState(props.tags || []);

  const removeTag = tag => {
    setTags(tags.filter(item => item !== tag));
  };

  const addTag = () => {
    const formatedTag = newTag
      .trim()
      .split(' ')
      .join('-');
    if (tags.length >= 5) {
      console.warn('you can add up t 5 tags');
    } else if (tags.includes(formatedTag)) {
      console.warn('this tag already exists');
    } else if (formatedTag.length === 0) {
      setNewTag('');
    } else {
      setTags([...tags, formatedTag]);
      setNewTag('');
    }
  };

  const updateTags = () => {
    ws.send({
      id: 42,
      type: 'set_tags',
      film: props.filmId,
      tags: tags,
    })
      .then(response => {
        if (response.type === 'confirm') {
          props.close();
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={[s.card, {backgroundColor: colors.background}]}>
          {tags && (
            <View style={s.currentTags}>
              {tags.map(tag => (
                <View key={tag} style={s.tagContainer}>
                  <TagItem tagName={tag} style={s.tag} />
                  <IconButton
                    name="trash"
                    size={24}
                    onPress={() => removeTag(tag)}
                  />
                </View>
              ))}
              {tags.length === 0 && (
                <View>
                  <Text style={{color: colors.text}}>
                    You haven't added any tags for {props.filmTitle}
                  </Text>
                </View>
              )}
            </View>
          )}
          <View style={s.inputForm}>
            <TextInput
              style={[
                s.input,
                {borderColor: colors.accent, color: colors.accent},
              ]}
              value={newTag}
              placeholder="enter tag"
              placeholderTextColor={colors.accent}
              onChangeText={text => setNewTag(text.toLowerCase())}
              onSubmitEditing={addTag}
            />
            <IconButton style={{padding: 10}} name="plus" onPress={addTag} />
          </View>
          <FaButton title="done" onPress={updateTags} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const s = StyleSheet.create({
  inputForm: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: 'SourceSansPro-Regular',
  },
  card: {
    padding: 30,
    height: '100%',
    justifyContent: 'center',
  },
  currentTags: {
    marginVertical: 10,
    justifyContent: 'flex-end',
    height: 200,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default TagForm;
