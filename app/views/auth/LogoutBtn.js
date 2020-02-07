import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

import FaButton from '../../components/dom/FaButton';

import ws from '../../ws';

const LogoutBtn = () => {

    const logout = () => {
        AsyncStorage.removeItem('token')
            .then(() => {
                AsyncStorage.removeItem('user')
            })
            .then(() => {
                ws.close();

                RNRestart.Restart();
            })
            .catch(err => {
                console.warn(err)
            })
    };

    return (
        <FaButton
            title='logout'
            onPress={logout} />
    )
};

export default LogoutBtn;