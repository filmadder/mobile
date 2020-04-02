import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

const DrawerBtn = () => {
  const navigation = useNavigation();
  const [hasUpdates, setHasUpdates] = React.useState(false);

  React.useEffect(() => {
    let listener = EventRegister.addEventListener('hasUpdates', () => {
      setHasUpdates(true);
    });

    return () => EventRegister.removeEventListener(listener);
  });

  const image = hasUpdates
    ? require('../../../assets/images/logo-notif.png')
    : require('../../../assets/images/logo.png');

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <TouchableOpacity onPress={toggleDrawer}>
      <Image style={s.menuBtn} source={image} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  menuBtn: {
    height: 40,
    width: 40,
  },
});

export default DrawerBtn;
