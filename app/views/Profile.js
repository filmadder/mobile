import React from 'react';
import { View, Text } from 'react-native';

import UserCard from '../components/user/UserCard';
import List from '../components/profile/List';
import NotFriends from '../components/profile/NotFriends';
import ProfileFooter from '../components/profile/ProfileFooter';
import ViewWrapper from './ViewWrapper';
import Loader from '../components/Loader'

import ws from '../ws';

const User = props => {
    const [type, setType] = React.useState('watchlist');
    const [user, setUser] = React.useState({});
    const [list, setList] = React.useState([]);
    const [friendshipStatus, setFriendshipStatus] = React.useState();
    const [areFriends, setAreFriends] = React.useState(false);

    const isFilmList = (type === 'watchlist' || type === 'watched' || type === 'watching')

    const footer = <ProfileFooter
            current={type}
            total={list && list.length} />;

    const onTypeSelected = type => {
        setType(type);
        setList([]);
    };

    React.useEffect(() => {

        getUser();

    }, [type])

    const getUser = () => {
        ws.send({
            type: "get_user",
            user: props.navigation.getParam('user'),
            id: null
        })
        .then(data => {
            setUser(data.user);

            setFriendshipStatus(data.friendship_status);

            if (data.friendship_status === 'f') {
                setAreFriends(true);
            }

            switch (type) {
                case 'friends':
                    setList(data.friends);
                    break;
                case 'tags':
                    setList(data.tags);
                    break;
                case 'watchlist':
                    setList(data.films_future);
                    break;
                case 'watched':
                    setList(data.films_past);
                    break;
                case 'watching':
                    setList(data.films_present);
                    break;
                default:
                    setList(data.films_future);
                    break;
            }
        })
        .catch(err => (console.warn(err)))
    }

    return (
        <View style={{ flex: 1 }}>
            <ViewWrapper>
                <UserCard
                    cancelPress={true}
                    size='large'
                    user={user} />
                {areFriends && list && <List
                    type={type}
                    list={list}
                    onTypeSelected={onTypeSelected}></List>}
                {!areFriends && (
                    <NotFriends
                        reload={getUser}
                        status={friendshipStatus}
                        user={user} />
                )}
            </ViewWrapper>
            {isFilmList && footer}
        </View>
    )
};

export default User;