import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CheckboxField from '../../components/CheckboxField';
import Thought from './Thought';
import FaSmallButton from '../dom/FaSmallButton';

import { colours } from '../../colours';

const Thoughts = props => {
    return (
        <View style={[s.container, props.style]}>
            <View style={s.header}>
                <Text style={s.title}>Thoughts</Text>
            </View>
            <View>
                <CheckboxField
                    text='include thoughts with spoilers'
                    onCheckboxChange={() => {}} />
                <Thought
                    username='penguin'
                    date='25 dec 2019'
                    text='Veritatis officia omnis qui officiis tenetur eum. Neque inventore dicta ipsum. Rerum veritatis alias sed vero in Laborum inventore optio repudiandae. Vel velit est autem quia. Quo at et autem iste. Sit consequuntur accusamus rerum nam maxime commodi consequatur illum laboriosam.' />
                <Thought
                    username='userwithareallylongusername'
                    date='13 mai 2019'
                    text='Vel velit est autem quia. Quo at et autem iste. Sit consequuntur accusamus rerum nam maxime commodi consequatur illum laboriosam.' />
            </View>
            <FaSmallButton
                title='load more' />
        </View>
    )
};

const s = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: colours.blue3,
        marginBottom: 15,
    },
    title: {
        paddingBottom: 5,
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
        color: colours.blue3,
    },
});

export default Thoughts;