import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import FilmCard from '../FilmCard';
import UserRow from '../user/UserRow';
import ListFilterDropdown from '../ListFilterDropdown';
import TagItem from '../TagItem';
import Loader from '../Loader';

import { colours } from '../../colours';

const List = props => {
    let content = null;

    // empty list
    if (props.list.length === 0) {
        content = <View style={[styles.content]}>
            <Text>nothing in {props.type}</Text>
        </View>
    // full list
    } else {
        switch (props.type) {
            case 'friends':
                content = <View style={[styles.content]}>
                    {props.list.map(item => <UserRow key={item.pk} user={item} size='large' />)}
                </View>
                break;
            case 'tags':
                content = <View style={[styles.content, styles.tagList]}>
                    {props.list.map((item, index) => (
                        <TagItem
                            key={index}
                            tagName={item}
                            style={{marginRight: 5, marginVertical: 5}}
                        />
                    ))}
                </View>
                break;
            default:
                content = <View style={[styles.content]}>
                    {props.list.map(item => <FilmCard key={item.pk} film={item} />)}
                </View>

        }
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            stickyHeaderIndices={[0]}
            onScroll={(ev) => {console.log(ev.nativeEvent.contentOffset)}}
            scrollEventThrottle='500'>
            <ListFilterDropdown
                style={styles.dropdown}
                onTypeSelected={props.onTypeSelected} />
            {content}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colours.blue4
    },
    content: {
        width: '100%',
        paddingVertical: 100
    },
    dropdown: {
        position: 'absolute',
        top: 0,
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

export default List;