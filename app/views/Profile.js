import React from 'react';
import { View, Text } from 'react-native';

import UserCard from '../components/user/UserCard';
import List from '../components/profile/List';
import NotFriends from '../components/profile/NotFriends';
import ProfileFooter from '../components/profile/ProfileFooter';
import ViewWrapper from './ViewWrapper';

import { getLoggedUser } from '../auth';
import ws from '../ws';

const User = props => {
    const [type, setType] = React.useState('watchlist');
    const [user, setUser] = React.useState({});
    const [isThemselves, setIsThemselves] = React.useState();
    const [list, setList] = React.useState([]);
    const [friendshipStatus, setFriendshipStatus] = React.useState();
    const [isBefriended, setIsBefriended] = React.useState(false);

    const isFilmList = (type === 'watchlist' || type === 'watched' || type === 'watching');

    const footer = <ProfileFooter
        current={type}
        total={list && list.length} />;

    const onTypeSelected = type => {
        setType(type);
        setList([]);
    };

    React.useEffect(() => {

        getUser();
    }, [type, props.navigation])

    const reload = () => {
        setIsBefriended(false),
        setList([])
        getUser()
    }

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
                setIsBefriended(true);
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
                case 'seen':
                    setList(data.films_past);
                    break;
                case 'watching':
                    setList(data.films_present);
                    break;
                default:
                    setList(data.films_future);
                    break;
            }

            return data.user.pk
        })
        .then(pk => {
            getLoggedUser()
                .then(user => {
                    setIsThemselves(user.pk.toString() === pk.toString())
                })
                .catch(err => {
                    console.warn(err)
                })
        })
        .catch(err => (console.warn(err)))
    }

    return (
        <View style={{ flex: 1 }}>
            <ViewWrapper>
                <UserCard
                    longPress={isBefriended && !isThemselves}
                    cancelPress={isThemselves}
                    reload={reload}
                    size='large'
                    user={user} />
                {isBefriended || isThemselves ? (
                    <List
                        type={type}
                        list={list}
                        onTypeSelected={onTypeSelected}></List>
                ) : (<NotFriends
                        reload={reload}
                        status={friendshipStatus}
                        user={user} />
                )}
            </ViewWrapper>
            {isFilmList && footer}
        </View>
    )
};

export default User;