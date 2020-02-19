import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colours } from '../colours';
import { getDate } from '../utils';

const Date = props => {
    const [date, setDate] = React.useState();

    React.useEffect(() => {
        setDate(getDate(props.created))
    })

    return (
        <Text style={[s.date, props.styles]}>{date}</Text>
    )
};

const s = StyleSheet.create({
    date: {
        color: colours.blue4,
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 13,
        textAlign: 'right'
    }
})

export default Date;
