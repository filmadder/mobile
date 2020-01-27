import React from 'react';
import { Text } from 'react-native';

import FeedCard from '../components/feed/FeedCard'
import ViewWrapper from './ViewWrapper';

import ws from '../ws';

const Feed = () => {
    const [feed, setFeed] = React.useState([]);

    React.useEffect(() => {

        let isSubscribed = true;

        ws.send({
            type: "get_feed",
            per_page: 4,
            page: 0,
            id: null
        })
        .then(data => (isSubscribed ? setFeed(data.items) : []))
        .catch(err => (isSubscribed ? (console.warn(err)) : null))

        return () => (isSubscribed = false);
    }, [feed])
    
    if (Object.entries(feed).length === 0) {
        return (<ViewWrapper>
                    <Text>loader</Text>
                </ViewWrapper>)
    } else {
        const items = feed.map(item => <FeedCard
                            key={item['film']['pk']}
                            item={item} />);

        return (
            <ViewWrapper
                title='Feed'>
                {items}
            </ViewWrapper>
        )
    }
};

export default Feed;