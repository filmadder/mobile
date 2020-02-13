import React from 'react';
import { TouchableOpacity } from 'react-native';

import Avatar from '../user/Avatar';
import AsyncStorage from '@react-native-community/async-storage';

const MyProfileBtn = props => {
    const [user, setUser] = React.useState()

    React.useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user => {
                let parsedUser = JSON.parse(user);
                setUser(parsedUser);
            })
            .catch(err => (console.warn(err)))
    }, [])

    const handlePress = () => {
        props.navigation.navigate('Profile', { user: user.pk })
        props.navigation.closeDrawer()
    }

    if (user) {
        return (
            <TouchableOpacity
                onPress={handlePress}>
                <Avatar
                    size='large'
                    avatar={user.avatar_url}
                    style={{ marignRight: 0, margin: 20 }}
                />
            </TouchableOpacity>
        )
    }

    return null
};

export default MyProfileBtn;