import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FaSmallButton from './dom/FaSmallButton';
import SettingsEditMode from './SettingsEditMode';
import SettingsPassword from './SettingsPassword';
import {ThemeContext} from '../context/theme';

const SettingsSection = props => {
  const theme = React.useContext(ThemeContext);
  const [editting, setEditting] = React.useState(false);

  const button = (
    <FaSmallButton title={props.btnText} onPress={() => setEditting(true)} />
  );

  return (
    <View style={s.container}>
      <SettingsEditMode visible={editting} transparent={false}>
        <View style={[s.modal, {backgroundColor: theme.colors.background}]}>
          <SettingsPassword close={() => setEditting(false)} />
        </View>
      </SettingsEditMode>

      <View style={[s.header, {borderTopColor: theme.colors.accent}]}>
        <Text style={[s.title, {color: theme.colors.accent}]}>
          {props.title}
        </Text>
        {props.btnText && button}
      </View>
      <View style={[s.content, props.style]}>{props.children}</View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 45,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
  },
  title: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
  },
  content: {
    padding: 30,
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsSection;
