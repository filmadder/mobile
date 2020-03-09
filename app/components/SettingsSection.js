import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import FaSmallButton from './dom/FaSmallButton';
import FaButton from './dom/FaButton';
import SettingsEditMode from './SettingsEditMode';
import SettingsPassword from './SettingsPassword';

import {colours} from '../colours';

const SettingsSection = props => {
  const [editting, setEditting] = React.useState(false);

  const button = (
    <FaSmallButton title={props.btnText} onPress={() => setEditting(true)} />
  );

  return (
    <View style={s.container}>
      <SettingsEditMode visible={editting} transparent={false}>
        <View style={s.modal}>
          <SettingsPassword close={() => setEditting(false)} />
        </View>
      </SettingsEditMode>

      <View style={s.header}>
        <Text style={s.title}>{props.title}</Text>
        {props.btnText && button}
      </View>
      <View style={[s.content, props.style]}>{props.children}</View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 45,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colours.blue4,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    color: colours.blue4,
  },
  content: {
    padding: 30,
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsSection;
