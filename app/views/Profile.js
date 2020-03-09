import React from 'react';
import {ScrollView} from 'react-native';

import ProfileList from '../components/profile/ProfileList';
import NotFriends from '../components/profile/NotFriends';
import UserCard from '../components/user/UserCard';
import Loader from '../components/Loader';
import ViewWrapper from './ViewWrapper';

import {getLoggedUser} from '../auth';
import ws from '../ws';

const User = props => {
  const [type, setType] = React.useState('watchlist');
  const [user, setUser] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);
  const [isThemselves, setIsThemselves] = React.useState();
  const [list, setList] = React.useState();
  const [friendshipStatus, setFriendshipStatus] = React.useState();
  const [isBefriended, setIsBefriended] = React.useState(false);

  const onTypeSelected = type => {
    setType(type);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const reload = () => {
    setIsBefriended(false);
    getUser();
  };

  const getUser = () => {
    ws.send({
      type: 'get_user',
      user: props.navigation.getParam('user'),
      id: null,
    })
      .then(data => {
        setLoaded(true);
        setUser(data.user);
        setFriendshipStatus(data.friendship_status);

        if (data.friendship_status === 'f') {
          setIsBefriended(true);
        }

        setList({
          friends: data.friends,
          tags: data.tags,
          watchlist: data.films_future,
          seen: data.films_past,
          watching: data.films_present,
        });

        return data.user.pk;
      })
      .then(pk => {
        getLoggedUser()
          .then(user => {
            setIsThemselves(user.pk.toString() === pk.toString());
          })
          .catch(err => {
            console.warn(err);
          });
      })
      .catch(err => console.warn(err));
  };

  if (!loaded) {
    return <Loader />;
  }

  return (
    <ViewWrapper>
      {isBefriended || isThemselves ? (
        <ProfileList
          type={type}
          list={list}
          reload={reload}
          loaded={loaded}
          isThemselves={isThemselves}
          isBefriended={isBefriended}
          user={user}
          onTypeSelected={onTypeSelected}></ProfileList>
      ) : (
        <ScrollView>
          <UserCard
            longPress={isBefriended && !isThemselves}
            cancelPress={isThemselves}
            reload={reload}
            size="large"
            user={user}
          />
          <NotFriends reload={reload} status={friendshipStatus} user={user} />
        </ScrollView>
      )}
    </ViewWrapper>
  );
};

export default User;
