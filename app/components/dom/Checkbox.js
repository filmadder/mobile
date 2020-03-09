import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import IconButton from '../dom/IconButton';

import {colours} from '../../colours';

const Checkbox = props => {
  const [checked, setChecked] = React.useState(props.checked);

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const handleCheckobox = () => {
    props.onCheckboxChange(!checked);
    setChecked(!checked);
  };

  return (
    <View>
      {checked ? (
        <IconButton
          style={[s.checkbox, props.style, s.checked]}
          name="check"
          color="red"
          onPress={() => handleCheckobox()}
        />
      ) : (
        <TouchableOpacity
          onPress={() => handleCheckobox()}
          style={[s.checkbox, props.style]}></TouchableOpacity>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  checkbox: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: colours.blue4,
  },
  checked: {
    backgroundColor: colours.blue4,
  },
});

export default Checkbox;
