import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

import FaButton from '../../components/dom/FaButton';

import ws from '../../ws';

const LogoutBtn = () => {

    const logout = () => {
        AsyncStorage.removeItem('token');
        AsyncStorage.getItem('token')
            .then(token => (console.log(token)))

        ws.close();

        RNRestart.Restart();
    };

    return (
        <FaButton
            title='logout'
            onPress={logout} />
    )
};

export default LogoutBtn;