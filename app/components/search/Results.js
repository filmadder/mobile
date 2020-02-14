import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Result from './Result';

const Results = props => {

    return (
        <ScrollView style={[s.container, props.style]}>
            {props.results.map(result => (
                <Result
                    key={result.pk ? result.pk.toString() : result}
                    result={result}
                    type={props.type}
                />
            ))}
        </ScrollView>
    )
};

const s = StyleSheet.create({
    container: {
        marginBottom: 40,
    }
})

export default Results;