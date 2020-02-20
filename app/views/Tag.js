import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import ViewTitle from '../components/ViewTitle';
import  UsernameLink from '../components/user/UsernameLink';
import FilmCard from '../components/FilmCard';
import ViewWrapper from './ViewWrapper';

const Tag = props => {
    const data = props.navigation.getParam('data');

    return (
        <ViewWrapper>
            <FlatList
                ListHeaderComponent={<ViewTitle title={data.tag} style={{ paddingTop: 20 }} />}
                data={data.users}
                keyExtractor={item => item.pk.toString()}
                renderItem={({ item }) => (
                    <View
                        style={s.userContainer}>
                        <UsernameLink
                            style={s.username}
                            user={{ name: item.name, pk: item.pk }}
                            size='large' />
                        <View>
                            <Text>{item.films.length}</Text>
                        </View>
                        <FlatList
                            style={s.filmsContainer}
                            horizontal
                            data={item.films}
                            keyExtractor={item => item.pk.toString()}
                            renderItem={({ item }) => (
                                <FilmCard
                                    style={s.film}
                                    film={item}
                                />
                            )}
                        />
                    </View>
                )}
            />
        </ViewWrapper>
    )
};

const s = StyleSheet.create({
    film: {
        width: 'auto',
        padding: 30,
    },
    filmsContainer: {
        paddingVertical: 20
    },
    userContainer: {
        paddingVertical: 30,
        alignItems: 'center'
    },
})

export default Tag;