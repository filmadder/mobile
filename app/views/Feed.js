import React from 'react';
import { ScrollView } from 'react-native';

import FeedCard from '../components/FeedCard'
import Film from '../components/feedItems/Film';
import Friendship from '../components/feedItems/Friendship';
import Thought from '../components/feedItems/Thought';
import Tag from '../components/feedItems/Tag';

const Feed = props => {
    return (
        <ScrollView>
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
      </ScrollView>
    )
};

export default Feed;