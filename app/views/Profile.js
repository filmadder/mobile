import React from 'react';
import { View } from 'react-native';

import UserCard from '../components/user/UserCard';
import List from '../components/profile/List';
import ProfileFooter from '../components/profile/ProfileFooter';
import ViewWrapper from './ViewWrapper';

import ws from '../ws';

const User = props => {
    const [type, setType] = React.useState('watchlist');
    const [user, setUser] = React.useState({});
    const [list, setList] = React.useState([]);

    const film = (type === 'watchlist' || type === 'watched' || type === 'watching')
        ? true
        : false

    const footer = <ProfileFooter
            current='watchlist'
            total={list.length} />;

    const onTypeSelected = type => {
        setType(type);
    };

    React.useEffect(() => {

        let isSubscribed = true;

        ws.send({
            type: "get_user",
            user: props.navigation.getParam('user'),
            id: null
        })
        .then(data => {
            setUser(data.user)
            setList(data.films_future)
        })
        .catch(err => (isSubscribed ? (console.warn(err)) : null))

        return () => (isSubscribed = false);
    }, [])

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