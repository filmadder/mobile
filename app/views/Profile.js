import React from 'react';
import { View, Text } from 'react-native';

import UserCard from '../components/user/UserCard';
import List from '../components/profile/List';
import ProfileFooter from '../components/profile/ProfileFooter';
import ViewWrapper from './ViewWrapper';
import Loader from '../components/Loader'

import ws from '../ws';

const User = props => {
    const [type, setType] = React.useState();
    const [user, setUser] = React.useState({});
    const [list, setList] = React.useState([]);

    const film = (type === 'watchlist' || type === 'watched' || type === 'watching')
        ? true
        : false

    const footer = <ProfileFooter
            current={type}
            total={list.length} />;

    const onTypeSelected = type => {
        setType(type);
        setList([]);
    };

    React.useEffect(() => {

        let isSubscribed = true;

        ws.send({
            type: "get_user",
            user: props.navigation.getParam('user'),
            id: null
        })
        .then(data => {
            setUser(data.user);

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
        .catch(err => (isSubscribed ? (console.warn(err)) : null))

        return () => (isSubscribed = false);
    }, [type])

    return (
        <View style={{ flex: 1 }}>
            <ViewWrapper>
                <UserCard
                    cancelPress={true}
                    size='large'
                    user={user} />
                <List
                    type={type}
                    list={list}
                    onTypeSelected={onTypeSelected}></List>
            </ViewWrapper>
            {film && footer}
        </View>
    )
};

export default User;