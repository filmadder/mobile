import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ProfileList from '../components/profile/ProfileList';
import NotFriends from '../components/profile/NotFriends';
import UserCard from '../components/user/UserCard';
import Loader from '../components/Loader';
import ViewWrapper from './ViewWrapper';
import {useWS} from '../ws';
import {useUser} from '../context/user';

const Profile = () => {
  const thisUser = useUser();
  const route = useRoute();
  const [data, reload] = useWS('get_user', {user: route.params.user});
  const [type, setType] = React.useState('watchlist');
  const [user, setUser] = React.useState({});
  const [isThemselves, setIsThemselves] = React.useState();
  const [list, setList] = React.useState();
  const [friendshipStatus, setFriendshipStatus] = React.useState();
  const [isBefriended, setIsBefriended] = React.useState(false);

  const onTypeSelected = type => {
    setType(type);
  };

  React.useEffect(() => {
    if (data) {
      setUser(data.user);
      setFriendshipStatus(data.friendship_status);
      setIsThemselves(data.user.pk.toString() === thisUser.pk);
      if (data.friendship_status === 'f') {
        setIsBefriended(true);
      } else {
        setIsBefriended(false);
      }
      setList({
        friends: data.friends,
        tags: data.tags,
        watchlist: data.films_future,
        seen: data.films_past,
        watching: data.films_present,
      });
    }
  }, [data]);

  if (data === null) {
    return <Loader />;
  }

  return (
    <ViewWrapper>
      {isBefriended || isThemselves ? (
        <ProfileList
          type={type}
          list={list}
          reload={reload}
          loaded={true}
          isThemselves={isThemselves}
          isBefriended={isBefriended}
          user={data.user}
          onTypeSelected={onTypeSelected}
        />
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

export default Profile;
