import React from 'react';
import { Text } from 'react-native';

import FeedCard from '../components/feed/FeedCard'
import ViewWrapper from './ViewWrapper';

import { useDispatch, connect } from 'react-redux';
import { get } from '../redux/actions';

const Feed = ({ feed }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(get({
            type: "get_feed",
            per_page: 3,
            page: 0,
            id: null
        }))
    }, [get])
    
    if (Object.entries(feed).length === 0) {
        return (<ViewWrapper>
                    <Text>loader</Text>
                </ViewWrapper>)
    } else {
        const items = feed.map(item =>
            {   
                return <FeedCard
                            key={item['film']['pk']}
                            item={item} />
            });

        return (
            <ViewWrapper
                title='Feed'>
                {items}
            </ViewWrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        feed: state.downstreamData.feed,
    }
};

export default connect(
    mapStateToProps,
)(Feed);