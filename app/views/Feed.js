import React from 'react';
import { Text } from 'react-native';

import FeedCard from '../components/feed/FeedCard'
import ViewWrapper from './ViewWrapper';
import NothingYet from './nothing/NothingYet';
import Loader from '../components/Loader';

import ws from '../ws';

const Feed = props => {
    const [feed, setFeed] = React.useState(null);

    const handleSearchPress = () => {
        props.navigation.navigate('Search', { 'search': 'friends' });
    }

    
    React.useEffect(() => {

        let isSubscribed = true;

        ws.send({
            type: "get_feed",
            per_page: 4,
            page: 0,
            id: null
        })
        .then(data => (isSubscribed ? setFeed(data.items) : null))
        .catch(err => (isSubscribed ? (console.warn(err)) : null))

        return () => (isSubscribed = false);
    }, [])


    /*
         RENDER
    */
    // show the loading screen before fetch
    if (feed === null) {
        return <Loader />
    // show Nothing screen when there are no feed items
    } else if (feed.length === 0) {
        return (
            <NothingYet
                buttonTitle='add friends'
                onPress={handleSearchPress}
                title='Your Feed is empty'
                text='add friends to see what they have watched' />
        )
    // show feed
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