import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import IconButton from '../dom/IconButton';
import {ThemeContext} from '../../theme';

const Checkbox = props => {
  const theme = React.useContext(ThemeContext);
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
            {
              backgroundColor: theme.colors.accent,
              borderColor: theme.colors.accent,
            },
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
              borderColor: theme.colors.accent,
            },
          ]}
        />
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
