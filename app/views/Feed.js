import React from 'react';
import { Text, Button, View } from 'react-native';

import FeedCard from '../components/FeedCard'
import Film from '../components/feedItems/Film';
import Friendship from '../components/feedItems/Friendship';
import Thought from '../components/feedItems/Thought';
import Tag from '../components/feedItems/Tag';
import ViewWrapper from './ViewWrapper';

import { users } from '../../data';

import { send } from '../ws';

import { useSelector, useDispatch, connect } from 'react-redux';
import { get } from '../redux/actions';

const Feed = ({ feed }) => {
    const dispatch = useDispatch();
    let content = null;

    React.useEffect(() => {
        dispatch(get({
            type: "get_feed",
            per_page: 1,
            page: 1,
            id: 0
        }))
    }, [get])

    
    if (Object.entries(feed).length === 0) {
        return (<ViewWrapper>
                    <Text>loader</Text>
                </ViewWrapper>)
    } else {
        const items = feed.map(item => {

            console.log(item)

            return (
                <FeedCard
                    key={item['film']['pk']}
                    user={item['user']}>
                    <Film
                        action={item['type']}
                        user={item['user']}
                        film={item['film']} />
                </FeedCard>
            )
        });

        return (
            <ViewWrapper>
                {items}
            </ViewWrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        feed: state.downstreamData,
    }
};

export default connect(
    mapStateToProps,
)(Feed);