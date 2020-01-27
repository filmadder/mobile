import AsyncStorage from '@react-native-community/async-storage';

export const loginUser = (email, password) => {
    return fetch('http://localhost:8000/auth/', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
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

export const registerUser = (email, name, password1, password2) => {
    const body = JSON.stringify({
        email,
        name,
        password1,
        password2
    })

    console.log(body)

    return fetch('http://localhost:8000/auth/', {
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