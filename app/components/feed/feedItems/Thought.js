import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FilmCard from '../../FilmCard';
import FeedCardHeader from '../FeedCardHeader';
import {useTheme} from '@react-navigation/native';

const Thought = (props) => {
  const {colors} = useTheme();

  return (
    <View>
      <FeedCardHeader
        user={props.user}
        navigation={props.navigation}
        action={' shared some thoughts'}
      />

      <View style={[styles.comment, {backgroundColor: colors.background}]}>
        <Text style={{color: colors.text}}>{props.comment.text}</Text>
      </View>

      <FilmCard film={props.film} />
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    borderRadius: 10,
    padding: 15,
    fontSize: 17,
    fontFamily: 'SourceSansPro-Regular',
  },
});

export default Thought;
