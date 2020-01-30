import React from 'react';
import { FlatList } from 'react-native';

import FeedCard from '../components/feed/FeedCard'
import NothingYet from './nothing/NothingYet';
import Loader from '../components/Loader';
import ViewTitle from '../components/ViewTitle';

import ws from '../ws';

const Feed = props => {
    const [feed, setFeed] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState(0);

    
    React.useEffect(() => {
                
        getFeed();
        
    }, [])
    
    const handleSearchPress = () => {
        props.navigation.navigate('Search', { 'search': 'users' });
    };
    
    const getFeed = () => {
        setPage(page + 1);

        ws.send({
            type: "get_feed",
            per_page: 20,
            page: page,
            id: null
        })
        .then(data => {
            setLoading(false);
            setFeed(feed.concat(data.items));
        })
        .catch(err => (console.warn(err)))
    }
    

    /*
         RENDER
    */
    // show the loading screen before fetch
    if (loading) {
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
        return (
            <FlatList
                ListHeaderComponent={<ViewTitle title='Feed' style={{ paddingTop: 20 }} />}
                data={feed}
                renderItem={({ item }) => <FeedCard item={item} />}
                keyExtractor={item => item.pk.toString()}
                onEndReached={getFeed}
            />
        )
    }
};

export default Feed;