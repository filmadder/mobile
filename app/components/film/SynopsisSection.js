import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colours } from '../../colours';
import IconButton from '../../components/dom/IconButton';

const SynopsisSection = props => {
    const [showing, setShowing] = React.useState(true);
    const hideIcon = <IconButton
        style={{ marginHorizontal: 8}}
        size={20} name='eye-slash'
        onPress={() => setShowing(false)} />
    const showIcon = <IconButton
        style={{ marginHorizontal: 8}}
        size={20} name='eye'
        onPress={() => setShowing(true)} />

    return (
        <View style={s.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={s.title}>{props.title}</Text>
                {showing ? hideIcon : showIcon }
            </View>
            {showing && <Text style={[s.text, props.synopsis && s.synopsis]}>{props.text}</Text>}
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    title: {
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 16,
        textTransform: 'uppercase',
        color: colours.blue4,
    },
    text: {
        marginTop: 3,
        fontFamily: 'SourceSansPro-SemiBold',
        fontSize: 17,
        color: colours.black
    },
    synopsis: {
        fontFamily: 'SourceSansPro-Regular',
    }
});

export default SynopsisSection;