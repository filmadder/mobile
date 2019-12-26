import React from 'react';
import { View, StyleSheet } from 'react-native';

import ViewWrapper from './ViewWrapper';
import Header from '../components/film/Header';
import Info from '../components/film/Info';
import Seen from '../components/film/Seen';
import Watchlist from '../components/film/Watchlist';
import Thoughts from '../components/film/Thoughts';
import ThoughtTextArea from '../components/film/ThoughtTextArea';

const Film = props => {
    return (
        <ViewWrapper
            style={s.view}>
            <Header
                poster={'https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'}
                title={'Lady Bird'}
                type={'film'}
                year={'2017'}
                country={'USA'}
                duration={'94 min'}
                status={'seen'} />
            <Info />
            <Seen
                tags={[
                    {
                        tagName: 'stunning',
                        tagTotal: '23'
                    },
                    {
                        tagName: '5 hamsters!!',
                        tagTotal: '7'
                    }
                ]}/>
            <Watchlist />
            <Thoughts />
            <ThoughtTextArea />
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    view: {
        paddingHorizontal: 0,
        paddingVertical: 0
    }
});

export default Film;