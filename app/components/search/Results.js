import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import UserResult from './resultItems/UserResult';
import FilmResult from './resultItems/FilmResult';
import DirectorResult from './resultItems/DirectorResult';
import TagResult from './resultItems/TagResult';

const Results = props => {
    let results = null;
    console.log(props.type)

    switch (props.type) {
        case 'films':
            results = <View>
                <FilmResult />
                <FilmResult />
                <FilmResult />
                <FilmResult />
                <FilmResult />
            </View>
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
                <UserResult username='stelaseldano' />
                <UserResult username='inna pyrina' />
            </View>
            break;
        default:
            results = <View>
                <FilmResult />
                <FilmResult />
                <FilmResult />
                <FilmResult />
                <FilmResult />
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