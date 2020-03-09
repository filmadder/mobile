import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Platform,
  Easing,
} from 'react-native';
import {colours} from '../colours';
import {profileLists} from '../constants/filters';

const ListFilterDropdown = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState('watchlist');
  const aniVal = new Animated.Value(0);

  const animate = () => {
    Animated.timing(aniVal, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start();
  };

  const height = aniVal.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 350],
  });

  const width = aniVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['30%', '100%'],
  });

  const closeDropdown = item => {
    props.onTypeSelected(item);
    setCurrentTab(item);
    setIsOpen(false);
  };

  const openDropdown = () => {
    animate();
    setIsOpen(true);
  };

  const Item = props => {
    return (
      <TouchableOpacity onPress={() => closeDropdown(props.item.filter)}>
        <Text style={styles.item}>{props.item.filter}</Text>
      </TouchableOpacity>
    );
  };

  let dropdown = null;
  let items = profileLists.map(item => <Item key={item.id} item={item} />);

  if (isOpen) {
    dropdown = <View>{items}</View>;
  } else {
    dropdown = (
      <Animated.View style={[height, width]}>
        <Text style={styles.item}>{currentTab}</Text>
      </Animated.View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      activeOpacity={0.6}
      onPress={() => openDropdown()}>
      {dropdown}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.blue3,
    marginHorizontal: 20,
    paddingVertical: 5,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  item: {
    fontFamily: Platform.OS === 'android' ? 'Pacifico-Regular' : 'Pacifico',
    color: colours.blue0,
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default ListFilterDropdown;
