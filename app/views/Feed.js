import React from 'react';
import {FlatList} from 'react-native';
import FeedCard from '../components/feed/FeedCard';
import NothingYet from './nothing/NothingYet';
import Loader from '../components/Loader';
import ViewTitle from '../components/ViewTitle';
import ViewWrapper from './ViewWrapper';
import {useWS} from '../ws';

const Feed = props => {
  const [page, setPage] = React.useState(0);
  const [data, reload] = useWS('get_feed', {per_page: 20, page});
  const [loading, setLoading] = React.useState(true);
  const [feed, setFeed] = React.useState([]);

  const handleSearchPress = () => {
    props.navigation.navigate('Search', {search: 'users'});
  };

  const getFeed = () => {
    setPage(page + 1);
    reload({per_page: 20, page: page + 1});
  };

  React.useEffect(() => {
    if (data) {
      setFeed(feed.concat(data.items));
      setLoading(false);
    }
  }, [data]);

  /*
    RENDER
  */
  if (loading) {
    return <Loader />;
  }

  return (
    <ViewWrapper style={{flex: 1}}>
      {feed.length === 0 ? (
        <NothingYet
          buttonTitle="add friends"
          onPress={handleSearchPress}
          title="Your Feed is empty"
          text="add friends to see what they have watched"
        />
      ) : (
        <FlatList
          ListHeaderComponent={<ViewTitle title="Feed" />}
          data={feed}
          renderItem={({item}) => <FeedCard item={item} />}
          keyExtractor={item => item.created}
          onEndReached={getFeed}
        />
      )}
    </ViewWrapper>
  );
};

export default Feed;
