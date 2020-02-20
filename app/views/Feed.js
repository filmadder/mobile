import React from 'react';
import { FlatList } from 'react-native';

import FeedCard from '../components/feed/FeedCard'
import NothingYet from './nothing/NothingYet';
import Loader from '../components/Loader';
import ViewTitle from '../components/ViewTitle';
import ViewWrapper from './ViewWrapper';

import ws from '../ws';

const Feed = props => {
    const [feed, setFeed] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
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
            setLoaded(true);
            setFeed(feed.concat(data.items));
        })
        .catch(err => {
            setLoaded(true);
        })
    }    

    /*
         RENDER
    */
    // show the loading screen before fetch is finished
    if (!loaded) {
        return <Loader />
    }

    return (
        <ViewWrapper style={{ flex: 1 }} >
            {feed.length === 0 ? (
                <NothingYet
                    buttonTitle='add friends'
                    onPress={handleSearchPress}
                    title='Your Feed is empty'
                    text='add friends to see what they have watched' />
            ) : (
                <FlatList
                    ListHeaderComponent={<ViewTitle title='Feed' />}
                    data={feed}
                    renderItem={({ item }) => <FeedCard item={item} />}
                    keyExtractor={item => item.pk.toString()}
                    onEndReached={getFeed}
                />
            )}
        </ViewWrapper>
    )
};

export default Feed;