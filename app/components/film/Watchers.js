import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserRow from '../user/UserRow';
import TagItem from '../../components/TagItem';
import TagForm from '../../components/tagging/TagForm';
import IconButton from '../../components/dom/IconButton';
import {ThemeContext} from '../../context/theme';
import {useUser} from '../../context/user';

const Watchers = props => {
  const theme = React.useContext(ThemeContext);
  const thisUser = useUser();
  const [isEditMode, setIsEditMode] = React.useState(false);

  const closeModal = () => {
    setIsEditMode(false);
    props.reloadFilm();
  };

  let watchers = props.watchers.map(watcher => {
    const user = {
      name: watcher.name,
      avatar_url: '/media/' + watcher.avatar_url,
      pk: watcher.pk,
    };

    const tags =
      watcher.tags &&
      watcher.tags.map((tag, index) => {
        return <TagItem key={tag + index} style={{margin: 5}} tagName={tag} />;
      });

    const manageTagsBtn = thisUser &&
      thisUser.pk === user.pk.toString() &&
      props.type === 'Seen' && (
        <IconButton name="tags" onPress={() => setIsEditMode(true)} />
      );

    return (
      <View style={s.userContainer} key={user.pk}>
        {thisUser && thisUser.pk === user.pk.toString() && (
          <TagForm
            filmId={props.filmId}
            filmTitle={props.filmTitle}
            reloadFilm={props.reloadFilm}
            visible={isEditMode}
            tags={watcher.tags}
            close={closeModal}
          />
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <UserRow user={user} size="medium" />
          {manageTagsBtn}
        </View>
        {watcher.tags && <View style={s.tagsContainer}>{tags}</View>}
      </View>
    );
  });

  return (
    <View style={[s.container, props.style]}>
      <View style={[s.header, {borderBottomColor: theme.colors.accent}]}>
        <Text style={[s.title, {color: theme.colors.accent}]}>
          {props.type}
        </Text>
      </View>
      {watchers}
    </View>
  );
};

const s = StyleSheet.create({
  title: {
    paddingBottom: 5,
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
  },
  header: {
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  userContainer: {
    marginVertical: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 35,
  },
  tag: {
    marginRight: 16,
    marginVertical: 8,
  },
});

export default Watchers;
