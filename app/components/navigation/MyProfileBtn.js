import React from 'react';

import AvatarLink from '../user/AvatarLink';
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
        return (
            <AvatarLink
                size='large'
                user={user}
                fromHeader={true}
                style={{ marignRight: 0 }}
            />
        )
    }

    return null
};

export default MyProfileBtn;