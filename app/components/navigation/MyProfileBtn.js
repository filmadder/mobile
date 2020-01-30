import React from 'react';

import Avatar from '../user/Avatar';
import AsyncStorage from '@react-native-community/async-storage';

const MyProfileBtn = () => {
    const [user, setUser] = React.useState()

    React.useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user => {
                let parsedUser = JSON.parse(user);
                setUser(parsedUser);
            })
            .catch(err => (console.warn(err)))
    }, [])

    if (user) {
        return <Avatar size='large' user={user} style={{marignRight: 0}} />
    }

    return null
};

export default MyProfileBtn;