import React from 'react';
import { View, StyleSheet } from 'react-native';

import InfoSection from './InfoSection';

const Info = props => {
    return (
        <View style={s.container}>
            <InfoSection
                title={'Director'}
                text={'Greta Gerwig'} />
            <InfoSection
                title={'Writer'}
                text={'Greta Gerwig'} />
            <InfoSection
                title={'Actors'}
                text={'Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges'} />
            <InfoSection
                title={'Synopsis'}
                synopsis={true}
                text={'In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.'} />
        </View>
    )
};

const s = StyleSheet.create({
    container: {
        padding: 30
    }
})

export default Info;