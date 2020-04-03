import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import IconButton from '../dom/IconButton';
import {useTheme} from '../../theme/hooks';

const Checkbox = props => {
  const {colors} = useTheme();
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
          style={[
            s.checkbox,
            props.style,
            {backgroundColor: colors.accent, borderColor: colors.accent},
          ]}
          name="check"
          onPress={() => handleCheckobox()}
        />
      ) : (
        <TouchableOpacity
          onPress={() => handleCheckobox()}
          style={[
            s.checkbox,
            props.style,
            {
              borderColor: colors.accent,
            },
          ]}></TouchableOpacity>
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
  },
  checked: {},
});

export default Checkbox;
