import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { colours } from '../../colours';

const Checkbox = props => {
    const [checked, setChecked] = React.useState(false);
    
    const handleCheckobox = () => {
        props.onCheckboxChange(!checked);
        setChecked(!checked);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => handleCheckobox()}
                style={[s.checkbox, props.style, checked && s.checked]}>
            </TouchableOpacity>
        </View>
    )
};

const s = StyleSheet.create({
    checkbox: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: colours.blue4
    },
    checked: {        
        backgroundColor: colours.blue4
    }
});

export default Checkbox;
