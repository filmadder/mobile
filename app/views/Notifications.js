import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import NotificationItem from '../components/NotificationItem';
import ViewTitle from '../components/ViewTitle';
import ViewWrapper from './ViewWrapper';
import Loader from '../components/Loader';
import {screen} from '../constants/device';
import {useWS} from '../ws';

const Notifications = props => {
  const [page, setPage] = React.useState(0);
  const [data, reload] = useWS('get_updates', {per_page: 10, page});
  const [updates, setUpdates] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (data) {
      setUpdates(updates.concat(data.items));
      setLoading(false);
    }
  }, [data]);

  const getUpdates = () => {
    setPage(page + 1);
    reload({per_page: 10, page: page + 1});
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ViewWrapper>
      <FlatList
        ListHeaderComponent={
          <ViewTitle title="Notifications" style={{paddingTop: 20}} />
        }
        data={updates}
        renderItem={({item}) => (
          <NotificationItem
            user={item.user}
            type={item.type}
            created={item.created}
          />
        )}
        style={{
          paddingHorizontal: screen.width < 400 ? 20 : 30,
        }}
        keyExtractor={item => item.pk.toString() + item.created}
        onEndReached={getUpdates}
      />
    </ViewWrapper>
  );
};

const s = StyleSheet.create({
  buttonGroup: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Notifications;
