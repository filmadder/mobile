import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList, StyleSheet} from 'react-native';
import NotificationItem from '../components/NotificationItem';
import ViewTitle from '../components/ViewTitle';
import ViewWrapper from './ViewWrapper';
import {screen} from '../constants/device';
import ws from '../ws';

const Notifications = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const [page, setPage] = React.useState(0);
  const [updates, setUpdates] = React.useState([]);

  React.useEffect(() => {
    //   navigation.popToTop();
    getUpdates();
  }, [updates]);

  const getUpdates = () => {
    setPage(page + 1);

    ws.send({
      type: 'get_updates',
      per_page: 10,
      page: page,
      id: null,
    })
      .then(data => {
        if (data.items.length > 0) {
          setUpdates(updates.concat(data.items));
        }
      })
      .catch(err => console.log(err));
  };

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
        keyExtractor={item => item.pk.toString()}
        onEndReached={() => getUpdates()}
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
