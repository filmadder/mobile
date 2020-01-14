import { send } from '../../ws';
import { loginUser } from '../../auth';

export function get(payload) {
    return function(dispatch) {
        return send(payload)
            .then(data => {
                const type = payload.type.toUpperCase();
                dispatch({type, data})
            })
            .catch(err => console.warn(err))
    }
}

export function login(email, password) {
    return function(dispatch) {
        return loginUser(email, password)
            .then(token => dispatch(getToken(token)))
            .catch(err => console.warn(err))
    }
}

export const getProfile = userId => {
    return {
        type: 'GET_PROFILE',
        profile
    }
}

export const getMe = userId => {
    return {
        type: 'GET_ME',
        me
    }
}

const getToken = token => {
    return {
        type: 'GET_TOKEN',
        token
    }
}

// export const getToken = token => {
//     return {
//         type: 'GET_TOKEN',
//         token
//     }
// }