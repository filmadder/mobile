import React from 'react';
import { ScrollView } from 'react-native';

import FeedCard from '../components/FeedCard'
import Film from '../components/feedItems/Film';
import Friendship from '../components/feedItems/Friendship';
import Thought from '../components/feedItems/Thought';
import Tag from '../components/feedItems/Tag';
import ViewWrapper from './ViewWrapper';

const Feed = props => {
    return (
        <ViewWrapper
            title='Feed'>
            <FeedCard>
                <Film />
            </FeedCard>
            <FeedCard>
                <Friendship />
            </FeedCard>
            <FeedCard>
                <Thought />
            </FeedCard>
            <FeedCard>
                <Tag />
            </FeedCard>
      </ViewWrapper>
    )
};

export default Feed;