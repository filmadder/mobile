import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ProfileCard from './ProfileCard';
import ListHeader from './ListHeader';
import { colours } from '../../colours';

const ProfileList = props => {
    const list = props.list ? props.list[props.type] : [];

    return (
        <View>
            {list.length === 0 ? (
                <View style={{ paddingHorizontal: 20 }}>
                    <ListHeader
                        onTypeSelected={props.onTypeSelected}
                        isThemselves={props.isThemselves}
                        isBefriended={props.isBefriended}
                        user={props.user} />
                    <Text>nothing in {props.type}</Text>
                </View>
            ) : (
                <FlatList
                    style={styles.list}
                    ListHeaderComponent={(
                        <ListHeader
                            onTypeSelected={props.onTypeSelected}
                            isThemselves={props.isThemselves}
                            isBefriended={props.isBefriended}
                            user={props.user}
                            reload={props.reload} />
                    )}
                    data={list}
                    renderItem={({ item }) => {
                        return <ProfileCard item={item} type={props.type} />
                    }}
                    keyExtractor={item => item.pk ? item.pk.toString() : item}
                />
            )}
        </View>
    )
};

const styles = StyleSheet.create({  
    container: {
        borderTopWidth: 1,
        borderTopColor: colours.blue4,
        minHeight: 300,
    },
    dropdown: {
    },
    list: {
        paddingHorizontal: 20,
    },
    card: {
        marginVertical: 10,
    },
    tagList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tag: {
        marginVertical: 8,
        marginRight: 16,
    }
});

export default ProfileList;