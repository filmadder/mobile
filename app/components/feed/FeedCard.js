import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screen} from '../../constants/device';
import AvatarLink from '../user/AvatarLink';
import Film from './feedItems/Film';
import Friendship from './feedItems/Friendship';
import Thought from './feedItems/Thought';
import Tag from './feedItems/Tag';
import Date from '../Date';
import {colours} from '../../colours';
import {ThemeContext} from '../../context/theme';

const FeedCard = props => {
  const theme = React.useContext(ThemeContext);
  let content = null;
  const type = props.item.type;

  switch (type) {
    case 't':
      content = (
        <Tag
          type={type}
          user={props.item.user}
          film={props.item.film}
          tags={props.item.tags}
        />
      );
      break;
    case 'f':
      content = (
        <Friendship userA={props.item.user_a} userB={props.item.user_b} />
      );
      break;
    case 'c':
      content = (
        <Thought
          comment={props.item.comment}
          user={props.item.user}
          film={props.item.film}
        />
      );
      break;
    case 'a':
    case 'i':
    case 'o':
    case 'u':
      content = (
        <Film type={type} user={props.item.user} film={props.item.film} />
      );
      break;
    default:
      content = (
        <View>
          <Text>no such type of feed item</Text>
        </View>
      );
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.contents, {backgroundColor: theme.colors.feedCard}]}>
        <AvatarLink
          user={props.item.user || props.item.user_a}
          style={styles.avatar}
          size="large"
        />
        {content}
        <Date created={props.item.created} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 50,
    paddingHorizontal: screen.width < 400 ? 15 : 30,
  },
  contents: {
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 10,
    elevation: 5,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowColor: colours.black,
    shadowRadius: 2,
    shadowOpacity: 0.3,
  },
  avatar: {
    position: 'absolute',
    top: -40,
    left: 20,
  },
});

export default FeedCard;
