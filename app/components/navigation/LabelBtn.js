import React from 'react';
import {TouchableOpacity, View, Text, Platform, StyleSheet} from 'react-native';
import {colours} from '../../colours';
import {EventRegister} from 'react-native-event-listeners';

const LabelBtn = props => {
  const [hasUpdates, setHasUpdates] = React.useState(false);

  React.useEffect(() => {
    let listener = EventRegister.addEventListener('hasUpdates', () => {
      setHasUpdates(true);
    });

    return () => EventRegister.removeEventListener(listener);
  });

  const handlePress = () => {
    props.navigation.navigate(props.label);
    props.navigation.closeDrawer();
    setHasUpdates(false);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={s.container}>
      {hasUpdates && props.label === 'Notifications' && <View style={s.dot} />}
      <Text style={s.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    flexDirection: 'row',
  },
  label: {
    fontFamily:
      Platform.OS === 'android' ? 'Pacifico-Regular' : 'Pacifico-Regular',
    color: colours.blue4,
    fontSize: 20,
    textAlign: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: colours.pink,
    borderRadius: 5,
  },
});

export default LabelBtn;
