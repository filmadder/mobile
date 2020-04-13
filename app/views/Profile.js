import React from 'react';
import {ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ProfileList from '../components/profile/ProfileList';
import NotFriends from '../components/profile/NotFriends';
import UserCard from '../components/user/UserCard';
import Loader from '../components/Loader';
import ViewWrapper from './ViewWrapper';
import ws from '../ws';
import {useUser} from '../context/user';

const Profile = () => {
  const thisUser = useUser();
  const route = useRoute();
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
    console.log(thisUser);
    getUser();
  }, []);

  const reload = () => {
    setIsBefriended(false);
    getUser();
  };

  const getUser = () => {
    ws.send({
      type: 'get_user',
      user: route.params.user,
      id: null,
    })
      .then(data => {
        setLoaded(true);
        setUser(data.user);
        setFriendshipStatus(data.friendship_status);
        setIsThemselves(data.user.pk.toString() === thisUser.pk);

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
