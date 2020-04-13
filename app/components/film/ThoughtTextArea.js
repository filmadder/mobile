import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FaButton from '../dom/FaButton';
import CheckboxField from '../CheckboxField';
import {ThemeContext} from '../../context/theme';
import ws from '../../ws';

const ThoughtTextArea = props => {
  const theme = React.useContext(ThemeContext);
  const [thought, setThought] = React.useState('');
  const [hasSpoilers, setHasSpoilers] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState('');

  const postComment = () => {
    ws.send({
      id: null,
      type: 'post_comment',
      film: props.filmId,
      text: thought,
      has_spoilers: hasSpoilers,
    })
      .then(response => {
        if (response.type === 'confirm') {
          setThought('');
          setHasSpoilers(false);
          props.reloadFilm();
        } else {
          setHasError(true);
          setError(response.message);
        }
      })
      .catch(err => {
        setHasError(true);
        setError(err);
      });
  };

  const errorMessage = (
    <View>
      <Text>{error}</Text>
    </View>
  );

  return (
    <View style={[s.container, props.style]}>
      {hasError && errorMessage}
      <View
        style={[
          s.textareaContainer,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.accent,
          },
        ]}>
        <TextInput
          style={[
            s.textarea,
            {
              color: theme.colors.text,
            },
          ]}
          value={thought}
          placeholder="share your thoughts"
          placeholderTextColor={theme.colors.text}
          onChangeText={text => setThought(text)}
          multiline={true}
          onFocus={() => setHasError(false)}
          numberOfLines={5}
        />
      </View>
      <CheckboxField
        style={s.checkbox}
        text="this has spoilers"
        checked={hasSpoilers}
        onCheckboxChange={() => setHasSpoilers(!hasSpoilers)}
      />
      <FaButton title="post" onPress={postComment} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  textareaContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  checkbox: {
    justifyContent: 'flex-end',
  },
  textarea: {
    height: 120,
    fontSize: 15,
    lineHeight: 15,
  },
});

export default ThoughtTextArea;
