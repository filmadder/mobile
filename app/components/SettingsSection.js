import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FaSmallButton from './dom/FaSmallButton';
import SettingsEditMode from './SettingsEditMode';
import SettingsPassword from './SettingsPassword';
import {useTheme} from '@react-navigation/native';

const SettingsSection = (props) => {
  const {colors} = useTheme();
  const [editting, setEditting] = React.useState(false);

  const button = (
    <FaSmallButton title={props.btnText} onPress={() => setEditting(true)} />
  );

  return (
    <View style={s.container}>
      <SettingsEditMode visible={editting} transparent={false}>
        <View style={[s.modal, {backgroundColor: colors.background}]}>
          <SettingsPassword close={() => setEditting(false)} />
        </View>
      </SettingsEditMode>

      <View style={[s.header, {borderTopColor: colors.accent}]}>
        <Text style={[s.title, {color: colors.accent}]}>{props.title}</Text>
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
