import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Text,
} from 'react-native';

import Login from './app/views/auth/Login';
import Register from './app/views/auth/Register';
import User from './app/views/User';
import FeedFilmCard from './app/components/FeedFilmCard'
import Film from './app/components/feedItems/Film';
import Friendship from './app/components/feedItems/Friendship';
import Comment from './app/components/feedItems/Comment';
import ProfileHeader from './app/components/ProfileHeader'

const Fa: () => React$Node = () => {
  return (
    <>
      <View style={styles.view}>
        <ScrollView>
          <FeedFilmCard>
            <Film />
          </FeedFilmCard>
          <FeedFilmCard>
            <Friendship />
          </FeedFilmCard>
          <FeedFilmCard>
            <Comment />
          </FeedFilmCard>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Fa;
