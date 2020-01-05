import React from 'react';
import { Text, Button } from 'react-native';

import FeedCard from '../components/FeedCard'
import Film from '../components/feedItems/Film';
import Friendship from '../components/feedItems/Friendship';
import Thought from '../components/feedItems/Thought';
import Tag from '../components/feedItems/Tag';
import ViewWrapper from './ViewWrapper';

import { users } from '../../data';

import { useSelector, useDispatch, connect } from 'react-redux';
import { getFeed } from '../redux/actions';

const Feed = ({ feed, userId }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getFeed(userId))
    }, [getFeed])

    return (
        <ViewWrapper
            title='Feed'>
            <FeedCard
                user={users['1']}>
                <Film />
            </FeedCard>
            <FeedCard
                user={users['2']}>
                <Friendship />
            </FeedCard>
            <FeedCard
                user={users['1']}>
                <Friendship />
            </FeedCard>
            <FeedCard
                user={users['3']}>
                <Thought />
            </FeedCard>
            <FeedCard
                user={users['1']}>
                <Tag />
            </FeedCard>
      </ViewWrapper>
    )
};

const mapStateToProps = state => ({
    feed: state.page.feed,
    userId: state.page.user.id
});

export default connect(
    mapStateToProps,
)(Feed);