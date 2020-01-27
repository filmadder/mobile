import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import UserResult from './resultItems/UserResult';
import FilmCard from '../../components/FilmCard';
import DirectorResult from './resultItems/DirectorResult';
import TagResult from './resultItems/TagResult';
import { users } from '../../../data';

const Results = props => {
    let results = null;

    switch (props.type) {
        case 'films':
            results = props.results.map(result => {
                return <FilmCard film={result} />
            })
            break;
        case 'tags':
            results = <View>
                <TagResult
                    tag={{name: 'outstanding'}}
                    users={[{username: 'stela'}, {username: 'aurora'}]} />
                <TagResult
                    tag={{name: 'mesmerising'}}
                    users={[{username: 'pavel'}, {username: 'inna'}, {username: 'villi'}]} />
            </View>
            break;
        case 'director':
            results = <View>
                <DirectorResult />
                <DirectorResult />
            </View>
            break;
        case 'users':
            results = <View>
                <UserResult user={users['1']} />
                <UserResult user={users['3']} />
            </View>
            break;
        default:
            results = <View>
            </View>        
    }

    return (
        <ScrollView style={[s.container, props.style]}>
            {results}
        </ScrollView>
    )
};

const s = StyleSheet.create({
    container: {

    }
})

export default Results;