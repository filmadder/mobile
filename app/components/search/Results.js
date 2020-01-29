import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import FilmCard from '../../components/FilmCard';
import TagResult from './TagResult';
import UserRow from '../user/UserRow';

const Results = props => {
    let results = null;

    switch (props.type) {
        case 'tags':
            break;
        case 'users':
            results = props.results.map(result => {
                return (
                    <UserRow
                        key={result.pk}
                        size='large'
                        user={result} />
                )
            })
            break;
        default:
            results = props.results.map(result => {
                return <FilmCard key={result.pk} film={result} />
            })
            break;     
    }

    return (
        <ScrollView style={[s.container, props.style]}>
            {results}
        </ScrollView>
    )
};

const s = StyleSheet.create({
    container: {
        marginBottom: 40,
    }
})

export default Results;