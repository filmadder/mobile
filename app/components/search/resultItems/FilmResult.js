import React from 'react';
import { View, StyleSheet } from 'react-native';

import FilmCard from '../../FilmCard';

const FilmResult = props => {
    console.log(props.result)
    return (
        <View>
            <FilmCard />
        </View>
    )
};

const s = StyleSheet.create({

})

export default FilmResult;