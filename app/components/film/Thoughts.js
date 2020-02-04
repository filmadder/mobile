import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CheckboxField from '../../components/CheckboxField';
import Thought from './Thought';

import { colours } from '../../colours';
import ws from '../../ws';

const Thoughts = props => {
    const [showAll, setShowAll] = React.useState(props.status === 'p');

    React.useEffect(() => {
        console.log('reloads')
        setShowAll(props.status === 'p')
    }, [props.status])

    const deleteComment = pk => {
        ws.send({
            id: null,
            type: "delete_comment",
            film: props.filmId,
            comment: pk
        })
        .then(response => {
            if (response.type === 'confirm') {
                props.reloadFilm();
            }
        })
        .catch(err => {
            console.warn(err)
        })
    };

    let thoughts = props.thoughts.map(thought => {
        let user = {
            avatar_url: '/media/' + thought.author.avatar_url,
            name: thought.author.name,
            pk: thought.author.pk
        }

        if (showAll) {
            return (
                <Thought
                    key={thought.pk}
                    user={user}
                    text={thought.text}
                    date={thought.posted}
                    deleteComment={() => deleteComment(thought.pk)} />
        )} else {
            if (!thought.has_spoilers) {
                return (
                    <Thought
                        key={thought.pk}
                        user={user}
                        text={thought.text}
                        date={thought.posted}
                        deleteComment={() => deleteComment(thought.pk)} />
                )}
        }
    })

    return (
        <View style={[s.container, props.style]}>
            <View style={s.header}>
                <Text style={s.title}>Thoughts</Text>
            </View>
            <View>
                <CheckboxField
                    checked={showAll}
                    text='show thoughts with spoilers'
                    onCheckboxChange={() => setShowAll(!showAll)} />
                {thoughts.length > 0 ? thoughts : <Text>no thoughts yet</Text>}
            </View>
        </View>
    )
};

const s = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: colours.blue3,
        marginBottom: 15,
    },
    title: {
        paddingBottom: 5,
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
        color: colours.blue3,
    },
});

export default Thoughts;