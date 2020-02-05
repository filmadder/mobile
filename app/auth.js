import AsyncStorage from '@react-native-community/async-storage';
import { server } from './settings';

export const loginUser = (email, password) => {
    const request = JSON.stringify({
        email,
        password
    });

    return fetch(server + '/auth/', {
                method: 'POST',
                body: request
            })
            .then(response => {
                return Promise.all([
                    Promise.resolve(response.status),
                    response.json()
                ]);
            })
            .then(data => {
                if (data[0] === 200) {
                    AsyncStorage.setItem('token', data[1].token)
                    AsyncStorage.setItem('user', JSON.stringify({
                        name: data[1].user.name,
                        pk: data[1].user.pk.toString(),
                        avatar_url: data[1]['user']['avatar_url']
                    }))
                }

                return data[1].token
            })
            .catch(err => console.warn(err))
}

export const registerUser = (email, name, password1, password2) => {
    const body = JSON.stringify({
        email,
        name,
        password1,
        password2
    })

    return fetch(server + '/auth/', {
                method: 'PUT',
                body: JSON.stringify({
                    email,
                    name,
                    password1,
                    password2
                })
            })
            .then(response => {
                return Promise.all([
                    Promise.resolve(response.status),
                    response.json()
                ]);
            })
            .then(data => {
                if (data[0] === 200) {
                    AsyncStorage.setItem('token', data[1].token)
                }

                return data[1].token
            })
            .catch(err => console.warn(err))
}

export const getLoggedUser = () => {
    return AsyncStorage.getItem('user')
        .then(user => {
            return JSON.parse(user)
        })
        .catch(err => {
            console.warn(err)
        })
}