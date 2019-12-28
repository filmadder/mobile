import React from 'react';

import FeedCard from '../components/FeedCard'
import Film from '../components/feedItems/Film';
import Friendship from '../components/feedItems/Friendship';
import Thought from '../components/feedItems/Thought';
import Tag from '../components/feedItems/Tag';
import ViewWrapper from './ViewWrapper';

import { users } from '../../data';

const Feed = () => {
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

export default Feed;