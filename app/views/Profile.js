import React from 'react';
import { View } from 'react-native';

import UserCard from '../components/user/UserCard';
import List from '../components/profile/List';
import ProfileFooter from '../components/profile/ProfileFooter';
import ViewWrapper from './ViewWrapper';

const User = props => {
    const [type, setType] = React.useState('watchlist');
    const user = props.navigation.getParam('user') || null;

    const film = (type === 'watchlist' || type === 'watched' || type === 'watching')
        ? true
        : false

    const footer = <ProfileFooter
            current='watchlist'
            total='25' />;

    const onTypeSelected = type => {
        setType(type);
    };

    React.useEffect(() => {
        // console.log(props.navigation.getScreenProps())
    })

    return (
        <View style={{ flex: 1 }}>
            <ViewWrapper>
                <UserCard
                    user={user} />
                <List
                    type={type}
                    onTypeSelected={onTypeSelected}></List>
            </ViewWrapper>
            {film && footer}
        </View>
    )
};

export default User;