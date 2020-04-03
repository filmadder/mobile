import React from 'react';
import {View} from 'react-native';

import InfoSection from './InfoSection';
import SynopsisSection from './SynopsisSection';

const Info = props => {
  return (
    <View style={[props.style]}>
      {props.directors.length > 0 && (
        <InfoSection title={'Directors'} text={props.directors} />
      )}
      {props.writers.length > 0 && (
        <InfoSection title={'Writers'} text={props.writers} />
      )}
      {props.actors.length > 0 && (
        <InfoSection title={'Actors'} text={props.actors} />
      )}
      {props.synopsis.length > 0 && (
        <SynopsisSection title={'Synopsis'} text={props.synopsis} />
      )}
    </View>
  );
};

export default Info;
