import React from 'react';
import {View, Easing, StyleSheet, Animated} from 'react-native';
import {useTheme} from '../theme/hooks';

const Loader = () => {
  const {colors} = useTheme();
  const spinValue = new Animated.Value(0);

  const spinLoader = () => {
    spinValue.setValue(0);

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => spinLoader());
  };

  spinLoader();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[s.loaderContainer, {backgroundColor: colors.background}]}>
      <Animated.Image
        source={require('../../assets/images/loader.png')}
        style={{height: 80, width: 80, transform: [{rotate: spin}]}}
      />
    </View>
  );
};

const s = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    height: 80,
    width: 80,
  },
});

export default Loader;
